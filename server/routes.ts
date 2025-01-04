import type { Express } from "express";
import { createServer } from "http";
import { mockProducts, mockOrders, mockStats } from "../client/src/lib/mockData";

export function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Products endpoints
  app.get("/api/products", async (_req, res) => {
    res.json(mockProducts);
  });

  app.post("/api/products", async (req, res) => {
    const newProduct = { ...req.body, id: String(mockProducts.length + 1) };
    mockProducts.push(newProduct);
    res.json(newProduct);
  });

  app.put("/api/products/:id", async (req, res) => {
    const index = mockProducts.findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
    mockProducts[index] = { ...mockProducts[index], ...req.body };
    res.json(mockProducts[index]);
  });

  app.delete("/api/products/:id", async (req, res) => {
    const index = mockProducts.findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
    mockProducts.splice(index, 1);
    res.status(204).end();
  });

  // Orders endpoints
  app.get("/api/orders", async (_req, res) => {
    res.json(mockOrders);
  });

  app.get("/api/orders/recent", async (_req, res) => {
    res.json({ orders: mockOrders.slice(0, 5) });
  });

  // Stats endpoint
  app.get("/api/stats", async (_req, res) => {
    res.json(mockStats);
  });

  return httpServer;
}