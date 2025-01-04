import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Package, ShoppingCart } from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/products", label: "Products", icon: Package },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="w-64 bg-sidebar border-r h-screen fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-sidebar-foreground">Amazon Seller</h1>
      </div>
      
      <nav className="space-y-1 px-3">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link 
            key={href} 
            href={href}
          >
            <a className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location === href 
                ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}>
              <Icon className="h-5 w-5" />
              {label}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
