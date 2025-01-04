import type { Express } from "express";
import { createServer } from "http";
import { mockProducts, mockOrders, mockStats } from "../client/src/lib/mockData";

// This file will be updated with SP-API integration once credentials are configured
export function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Products endpoints - will be connected to SP-API Inventory API
  app.get("/api/products", async (_req, res) => {
    try {
      // TODO: Replace with actual SP-API call
      // const spApiClient = await createSpApiClient();
      // const inventory = await spApiClient.callInventoryApi();
      res.json(mockProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  });

  // Orders endpoints - will be connected to SP-API Orders API
  app.get("/api/orders", async (_req, res) => {
    try {
      // TODO: Replace with actual SP-API call
      // const spApiClient = await createSpApiClient();
      // const orders = await spApiClient.callOrdersApi();
      res.json(mockOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Failed to fetch orders' });
    }
  });

  app.get("/api/orders/recent", async (_req, res) => {
    try {
      // TODO: Replace with actual SP-API call
      // const spApiClient = await createSpApiClient();
      // const recentOrders = await spApiClient.callOrdersApi({ recent: true });
      res.json({ orders: mockOrders.slice(0, 5) });
    } catch (error) {
      console.error('Error fetching recent orders:', error);
      res.status(500).json({ message: 'Failed to fetch recent orders' });
    }
  });

  // Stats endpoint - will aggregate data from multiple SP-API endpoints
  app.get("/api/stats", async (_req, res) => {
    try {
      // TODO: Replace with actual SP-API calls and aggregation
      // const spApiClient = await createSpApiClient();
      // const stats = await aggregateStats(spApiClient);
      res.json(mockStats);
    } catch (error) {
      console.error('Error fetching stats:', error);
      res.status(500).json({ message: 'Failed to fetch stats' });
    }
  });

  return httpServer;
}