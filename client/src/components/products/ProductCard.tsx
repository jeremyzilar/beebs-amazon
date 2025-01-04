import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProductEditForm from "./ProductEditForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    stock: number;
  };
  view: 'grid' | 'list';
}

export default function ProductCard({ product, view }: ProductCardProps) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/products/${product.id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete product');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/products'] });
      toast({
        title: "Product deleted",
        description: "The product has been successfully deleted",
      });
    },
  });

  const CardWrapper = view === 'grid' ? Card : 'div';

  return (
    <CardWrapper className={view === 'list' ? "flex items-center gap-6 p-4 border rounded-lg" : ""}>
      <img 
        src={product.image} 
        alt={product.title}
        className={view === 'grid' ? "w-full h-48 object-cover rounded-t-lg" : "w-24 h-24 object-cover rounded-lg"}
      />
      
      <CardContent className={view === 'grid' ? "p-4" : "flex-1"}>
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
        <p className="text-sm">Stock: {product.stock}</p>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <ProductEditForm product={product} />
        </Dialog>

        <Button 
          variant="destructive" 
          size="icon"
          onClick={() => deleteMutation.mutate()}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </CardFooter>
    </CardWrapper>
  );
}
