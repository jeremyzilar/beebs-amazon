import type { Express } from "express";
import { createServer } from "http";
import { db } from "@db";
import { products, orders } from "@db/schema";
import { eq, desc, sql } from "drizzle-orm";

export function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Products endpoints
  app.get("/api/products", async (req, res) => {
    const allProducts = await db.select().from(products).orderBy(desc(products.updatedAt));
    res.json(allProducts);
  });

  app.post("/api/products", async (req, res) => {
    const product = await db.insert(products).values(req.body).returning();
    res.json(product[0]);
  });

  app.put("/api/products/:id", async (req, res) => {
    const updated = await db
      .update(products)
      .set(req.body)
      .where(eq(products.id, parseInt(req.params.id)))
      .returning();
    res.json(updated[0]);
  });

  app.delete("/api/products/:id", async (req, res) => {
    await db.delete(products).where(eq(products.id, parseInt(req.params.id)));
    res.status(204).end();
  });

  // Orders endpoints
  app.get("/api/orders", async (req, res) => {
    const allOrders = await db.select().from(orders).orderBy(desc(orders.createdAt));
    res.json(allOrders);
  });

  app.get("/api/orders/recent", async (req, res) => {
    const recentOrders = await db
      .select()
      .from(orders)
      .orderBy(desc(orders.createdAt))
      .limit(5);
    res.json({ orders: recentOrders });
  });

  // Stats endpoint
  app.get("/api/stats", async (req, res) => {
    const [{ totalProducts }] = await db
      .select({
        totalProducts: sql<number>`count(*)`.mapWith(Number),
      })
      .from(products);

    const [{ totalOrders }] = await db
      .select({
        totalOrders: sql<number>`count(*)`.mapWith(Number),
      })
      .from(orders);

    const [{ totalSales }] = await db
      .select({
        totalSales: sql<number>`coalesce(sum(${orders.total}), 0)`.mapWith(Number),
      })
      .from(orders);

    res.json({
      totalProducts,
      totalOrders,
      totalSales,
      growth: 12.5, // This would typically be calculated based on historical data
    });
  });

  return httpServer;
}