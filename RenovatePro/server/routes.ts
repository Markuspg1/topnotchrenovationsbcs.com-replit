import type { Express } from "express";
import { storage } from "./storage";
import { insertContactSchema, insertConsultationSchema, insertCostEstimateSchema } from "@shared/schema";
import { z } from "zod";

export function registerRoutes(app: Express) {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

      const webhookUrl = process.env.N8N_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          const resp = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact),
          });
          if (!resp.ok) {
            console.error(
              "n8n webhook responded with",
              resp.status,
              await resp.text(),
            );
          }
        } catch (err) {
          console.error("Error forwarding contact to n8n:", err);
        }
      }

      res.json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Consultation booking
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      res.json(consultation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid consultation data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all consultations
  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      res.json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Update consultation status
  app.patch("/api/consultations/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const consultation = await storage.updateConsultationStatus(id, status);
      if (consultation) {
        res.json(consultation);
      } else {
        res.status(404).json({ message: "Consultation not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Cost estimate submission
  app.post("/api/cost-estimates", async (req, res) => {
    try {
      const validatedData = insertCostEstimateSchema.parse(req.body);
      const estimate = await storage.createCostEstimate(validatedData);
      res.json(estimate);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid cost estimate data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/cost-estimates", async (req, res) => {
    try {
      const estimates = await storage.getCostEstimates();
      res.json(estimates);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

}
