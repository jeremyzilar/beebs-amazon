import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";

interface Stats {
  totalSales: number;
  totalOrders: number;
  totalProducts: number;
  growth: number;
}

export default function StatsCards({ stats }: { stats?: Stats }) {
  const cards = [
    {
      title: "Total Sales",
      value: stats?.totalSales ? `$${stats.totalSales.toFixed(2)}` : "...",
      icon: DollarSign,
    },
    {
      title: "Total Orders",
      value: stats?.totalOrders ?? "...",
      icon: ShoppingCart,
    },
    {
      title: "Total Products",
      value: stats?.totalProducts ?? "...",
      icon: Package,
    },
    {
      title: "Growth",
      value: stats?.growth ? `${stats.growth}%` : "...",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
