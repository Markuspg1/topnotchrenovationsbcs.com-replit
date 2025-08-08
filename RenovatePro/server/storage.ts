import { 
  type User, 
  type InsertUser, 
  type Contact, 
  type InsertContact,
  type Consultation,
  type InsertConsultation,
  type CostEstimate,
  type InsertCostEstimate
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  updateConsultationStatus(id: string, status: string): Promise<Consultation | undefined>;
  
  createCostEstimate(estimate: InsertCostEstimate): Promise<CostEstimate>;
  getCostEstimates(): Promise<CostEstimate[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private consultations: Map<string, Consultation>;
  private costEstimates: Map<string, CostEstimate>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.consultations = new Map();
    this.costEstimates = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      id,
      firstName: insertContact.firstName,
      lastName: insertContact.lastName,
      email: insertContact.email,
      phone: insertContact.phone,
      serviceArea: insertContact.serviceArea ?? null,
      projectType: insertContact.projectType ?? null,
      projectDetails: insertContact.projectDetails ?? null,
      preferredContact: insertContact.preferredContact ?? null,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = randomUUID();
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      status: "pending",
      createdAt: new Date(),
      serviceArea: insertConsultation.serviceArea ?? null,
      projectType: insertConsultation.projectType ?? null,
      projectDetails: insertConsultation.projectDetails ?? null,
      preferredDate: insertConsultation.preferredDate ?? null,
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async updateConsultationStatus(id: string, status: string): Promise<Consultation | undefined> {
    const consultation = this.consultations.get(id);
    if (consultation) {
      const updated = { ...consultation, status };
      this.consultations.set(id, updated);
      return updated;
    }
    return undefined;
  }

  async createCostEstimate(insertEstimate: InsertCostEstimate): Promise<CostEstimate> {
    const id = randomUUID();
    const estimate: CostEstimate = {
      ...insertEstimate,
      id,
      createdAt: new Date(),
      squareFootage: insertEstimate.squareFootage ?? null,
    };
    this.costEstimates.set(id, estimate);
    return estimate;
  }

  async getCostEstimates(): Promise<CostEstimate[]> {
    return Array.from(this.costEstimates.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }
}

export const storage = new MemStorage();
