import { z } from "zod";

// Updated schemas to match SP-API response formats
export const productSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  stock: z.number(),
  image: z.string().url(),
  amazonId: z.string(),
  condition: z.string().optional(),
  fulfillmentChannel: z.string().optional(),
});

export const orderSchema = z.object({
  id: z.string(),
  amazonOrderId: z.string(),
  purchaseDate: z.string(),
  orderStatus: z.string(),
  salesChannel: z.string().optional(),
  orderTotal: z.object({
    amount: z.number(),
    currencyCode: z.string()
  }),
  buyerInfo: z.object({
    buyerName: z.string(),
    email: z.string().optional()
  }),
  itemsCount: z.number()
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