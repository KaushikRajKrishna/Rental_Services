import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const bikes = pgTable("bikes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // 'scooter' | 'bike' | 'cruiser'
  price: integer("price").notNull(), // price per day
  image: text("image").notNull(),
  description: text("description").notNull(),
  available: boolean("available").default(true).notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  bikeId: integer("bike_id"), // Optional specific bike interest
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBikeSchema = createInsertSchema(bikes).omit({ id: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });

export type Bike = typeof bikes.$inferSelect;
export type InsertBike = z.infer<typeof insertBikeSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
