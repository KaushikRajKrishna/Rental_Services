import {
  type InsertBike,
  type InsertInquiry,
  type Bike,
  type Inquiry,
} from "@shared/schema";

const SEED_BIKES: Bike[] = [
  {
    id: 1,
    name: "Royal Enfield Himalayan",
    type: "Adventure",
    price: 1500,
    image: "https://www.royalenfield.com/content/dam/royal-enfield/usa/motorcycles/himalayan/colours/new-colors/studio-shots/gravel-grey/side-view.png",
    description: "Perfect for Darjeeling's tough terrain. 411cc adventure tourer.",
    available: true,
  },
  {
    id: 2,
    name: "Royal Enfield Classic 350",
    type: "Cruiser",
    price: 1200,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    description: "Timeless classic for a smooth ride through the hills.",
    available: true,
  },
  {
    id: 3,
    name: "KTM Duke 250",
    type: "Sport",
    price: 1400,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
    description: "Agile and powerful, great for sharp turns.",
    available: true,
  },
  {
    id: 4,
    name: "TVS Ntorq 125",
    type: "Scooter",
    price: 800,
    image: "https://img.autocarindia.com/Reviews/BS6-TVS-Ntorq-2.jpg?w=700&c=0",
    description: "Easy to handle, perfect for city and short trips.",
    available: true,
  },
  {
    id: 5,
    name: "Bajaj Dominar 250",
    type: "Tourer",
    price: 1300,
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop",
    description: "Comfortable sports tourer for long rides.",
    available: true,
  },
  {
    id: 6,
    name: "Royal Enfield Hunter 350",
    type: "Roadster",
    price: 1200,
    image: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/hunter/book-a-test-ride.png",
    description: "Agile, light, and fun to ride in the city.",
    available: true,
  },
];

let inquiriesList: Inquiry[] = [];
let nextInquiryId = 1;

export interface IStorage {
  getBikes(): Promise<Bike[]>;
  getBike(id: number): Promise<Bike | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  seedBikes(): Promise<void>;
}

export class MemoryStorage implements IStorage {
  async getBikes(): Promise<Bike[]> {
    return SEED_BIKES;
  }

  async getBike(id: number): Promise<Bike | undefined> {
    return SEED_BIKES.find((bike) => bike.id === id);
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = { id: nextInquiryId++, ...insertInquiry } as Inquiry;
    inquiriesList.push(inquiry);
    console.log("New inquiry received:", inquiry);
    return inquiry;
  }

  async seedBikes(): Promise<void> {
    // No-op for in-memory storage, bikes are already in SEED_BIKES
  }
}

export const storage = new MemoryStorage();
