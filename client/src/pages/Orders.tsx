import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import OrdersTable from "@/components/orders/OrdersTable";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Orders() {
  const [search, setSearch] = useState('');

  const { data: orders } = useQuery({
    queryKey: ['/api/orders', search],
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Orders</h1>
        <Input 
          placeholder="Search orders..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64"
        />
      </div>

      <Card className="p-6">
        <OrdersTable orders={orders || []} />
      </Card>
    </div>
  );
}
