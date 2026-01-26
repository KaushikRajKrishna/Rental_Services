import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  await storage.seedBikes();

  app.get(api.bikes.list.path, async (req, res) => {
    const bikes = await storage.getBikes();
    res.json(bikes);
  });

  app.get(api.bikes.get.path, async (req, res) => {
    const bike = await storage.getBike(Number(req.params.id));
    if (!bike) {
      return res.status(404).json({ message: 'Bike not found' });
    }
    res.json(bike);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
