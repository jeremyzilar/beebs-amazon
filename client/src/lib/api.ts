import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  stock: z.number(),
  image: z.string().url(),
});

export const orderSchema = z.object({
  id: z.string(),
  date: z.string(),
  customerName: z.string(),
  total: z.number(),
  status: z.enum(['pending', 'shipped', 'delivered']),
  items: z.number(),
});

export const statsSchema = z.object({
  totalSales: z.number(),
  totalOrders: z.number(),
  totalProducts: z.number(),
  growth: z.number(),
});

export type Product = z.infer<typeof productSchema>;
export type Order = z.infer<typeof orderSchema>;
export type Stats = z.infer<typeof statsSchema>;
