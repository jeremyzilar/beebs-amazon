import { Switch, Route } from "wouter";
import Dashboard from "@/pages/Dashboard";
import Products from "@/pages/Products";
import Orders from "@/pages/Orders";
import DashboardLayout from "@/components/layout/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </DashboardLayout>
  );
}

export default App;
