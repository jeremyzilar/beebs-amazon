import { Product, Order, Stats } from './api';

export const mockProducts = [
  {
    id: "1",
    title: "Wireless Earbuds",
    price: 49.99,
    stock: 150,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=400&h=400",
  },
  {
    id: "2",
    title: "Smart Watch",
    price: 199.99,
    stock: 75,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&h=400",
  },
  {
    id: "3",
    title: "Bluetooth Speaker",
    price: 79.99,
    stock: 200,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&h=400",
  }
] as Product[];

export const mockOrders = [
  {
    id: "1",
    date: new Date().toISOString(),
    customerName: "John Doe",
    total: 149.97,
    status: "delivered",
    items: 3,
  },
  {
    id: "2",
    date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    customerName: "Jane Smith",
    total: 199.99,
    status: "shipped",
    items: 1,
  },
  {
    id: "3",
    date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    customerName: "Bob Johnson",
    total: 79.99,
    status: "pending",
    items: 1,
  }
] as Order[];

export const mockStats: Stats = {
  totalSales: 429.95,
  totalOrders: 3,
  totalProducts: 3,
  growth: 15.5,
};
