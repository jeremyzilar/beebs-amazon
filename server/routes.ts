import type { Express } from "express";
import { createServer } from "http";
import { mockProducts, mockOrders, mockStats } from "../client/src/lib/mockData";

// This will be replaced with actual SP-API integration once we have credentials
export function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Products endpoints - will be connected to SP-API Inventory API
  app.get("/api/products", async (_req, res) => {
    // TODO: Replace with SP-API call
    res.json(mockProducts);
  });

  // Orders endpoints - will be connected to SP-API Orders API
  app.get("/api/orders", async (_req, res) => {
    // TODO: Replace with SP-API call
    res.json(mockOrders);
  });

  app.get("/api/orders/recent", async (_req, res) => {
    // TODO: Replace with SP-API call
    res.json({ orders: mockOrders.slice(0, 5) });
  });

  // Stats endpoint - will aggregate data from multiple SP-API endpoints
  app.get("/api/stats", async (_req, res) => {
    // TODO: Replace with SP-API calls and aggregation
    res.json(mockStats);
  });

  return httpServer;
}