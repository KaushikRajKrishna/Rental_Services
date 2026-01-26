import { db } from "./db";
import {
  bikes,
  inquiries,
  type InsertBike,
  type InsertInquiry,
  type Bike,
  type Inquiry,
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getBikes(): Promise<Bike[]>;
  getBike(id: number): Promise<Bike | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  seedBikes(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getBikes(): Promise<Bike[]> {
    return await db.select().from(bikes);
  }

  async getBike(id: number): Promise<Bike | undefined> {
    const [bike] = await db.select().from(bikes).where(eq(bikes.id, id));
    return bike;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async seedBikes(): Promise<void> {
    const count = await db.select().from(bikes);
    if (count.length === 0) {
      const seedData: InsertBike[] = [
        {
          name: "Royal Enfield Himalayan",
          type: "Adventure",
          price: 1500,
          image: "https://images.unsplash.com/photo-1625043484555-47841a7502ad?q=80&w=800&auto=format&fit=crop",
          description: "Perfect for Darjeeling's tough terrain. 411cc adventure tourer.",
          available: true,
        },
        {
          name: "Royal Enfield Classic 350",
          type: "Cruiser",
          price: 1200,
          image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
          description: "Timeless classic for a smooth ride through the hills.",
          available: true,
        },
        {
          name: "KTM Duke 250",
          type: "Sport",
          price: 1400,
          image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
          description: "Agile and powerful, great for sharp turns.",
          available: true,
        },
        {
          name: "TVS Ntorq 125",
          type: "Scooter",
          price: 800,
          image: "https://images.unsplash.com/photo-1623087355152-4464c8d1976a?q=80&w=800&auto=format&fit=crop", // Generic scooter placeholder
          description: "Easy to handle, perfect for city and short trips.",
          available: true,
        },
        {
          name: "Bajaj Dominar 250",
          type: "Tourer",
          price: 1300,
          image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop", // Generic bike
          description: "Comfortable sports tourer for long rides.",
          available: true,
        },
        {
          name: "Royal Enfield Hunter 350",
          type: "Roadster",
          price: 1200,
          image: "https://images.unsplash.com/photo-1695627237936-397a73228a95?q=80&w=800&auto=format&fit=crop",
          description: "Agile, light, and fun to ride in the city.",
          available: true,
        },
      ];
      await db.insert(bikes).values(seedData);
    }
  }
}

export const storage = new DatabaseStorage();
