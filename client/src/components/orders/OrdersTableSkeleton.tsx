import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function OrdersTableSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3].map((index) => (
          <TableRow key={index}>
            <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[40px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
            <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
