import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardSkeletonProps {
  view: 'grid' | 'list';
}

export default function ProductCardSkeleton({ view }: ProductCardSkeletonProps) {
  const CardWrapper = view === 'grid' ? Card : 'div';

  return (
    <CardWrapper className={view === 'list' ? "flex items-center gap-6 p-4 border rounded-lg" : ""}>
      <Skeleton 
        className={view === 'grid' ? "w-full h-48 rounded-t-lg" : "w-24 h-24 rounded-lg"} 
      />
      
      <CardContent className={view === 'grid' ? "p-4" : "flex-1"}>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/4 mb-2" />
        <Skeleton className="h-4 w-1/3" />
      </CardContent>

      <CardFooter className="flex gap-2">
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-9 w-9" />
      </CardFooter>
    </CardWrapper>
  );
}

export function ProductGridSkeleton({ view }: { view: 'grid' | 'list' }) {
  return (
    <div className={view === 'grid' ? 
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : 
      "space-y-4"
    }>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <ProductCardSkeleton key={index} view={view} />
      ))}
    </div>
  );
}
