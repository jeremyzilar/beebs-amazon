import { Card } from "@/components/ui/card";
import StatsCards from "@/components/dashboard/StatsCards";
import StatsCardsSkeleton from "@/components/dashboard/StatsCardsSkeleton";
import OrdersTable from "@/components/orders/OrdersTable";
import OrdersTableSkeleton from "@/components/orders/OrdersTableSkeleton";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['/api/stats'],
  });

  const { data: recentOrders, isLoading: ordersLoading } = useQuery({
    queryKey: ['/api/orders/recent'],
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {statsLoading ? <StatsCardsSkeleton /> : <StatsCards stats={stats} />}

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        {ordersLoading ? (
          <OrdersTableSkeleton />
        ) : (
          <OrdersTable orders={recentOrders?.orders || []} />
        )}
      </Card>
    </div>
  );
}