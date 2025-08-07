import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceArea: text("service_area"),
  projectType: text("project_type"),
  projectDetails: text("project_details"),
  preferredContact: text("preferred_contact"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceArea: text("service_area"),
  projectType: text("project_type"),
  projectDetails: text("project_details"),
  preferredDate: text("preferred_date"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const costEstimates = pgTable("cost_estimates", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  projectType: text("project_type").notNull(),
  squareFootage: integer("square_footage"),
  qualityLevel: text("quality_level").notNull(),
  estimatedCost: decimal("estimated_cost", { precision: 10, scale: 2 }).notNull(),
  materialsCost: decimal("materials_cost", { precision: 10, scale: 2 }).notNull(),
  laborCost: decimal("labor_cost", { precision: 10, scale: 2 }).notNull(),
  permitsCost: decimal("permits_cost", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
  status: true,
});

export const insertCostEstimateSchema = createInsertSchema(costEstimates).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;

export type InsertCostEstimate = z.infer<typeof insertCostEstimateSchema>;
export type CostEstimate = typeof costEstimates.$inferSelect;
