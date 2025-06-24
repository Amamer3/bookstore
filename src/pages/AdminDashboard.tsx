
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Package,
  MessageSquare,
  Settings,
  Plus,
  Edit3,
  Trash2,
  Eye
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const { toast } = useToast();
  const [stats] = useState({
    totalUsers: 8547,
    totalOrders: 1234,
    revenue: 125670,
    products: 42
  });

  const [recentOrders] = useState([
    { id: '#1234', customer: 'Sarah Johnson', amount: 45, status: 'completed', date: '2024-01-15' },
    { id: '#1235', customer: 'Emily Davis', amount: 30, status: 'pending', date: '2024-01-15' },
    { id: '#1236', customer: 'Jessica Brown', amount: 65, status: 'completed', date: '2024-01-14' },
    { id: '#1237', customer: 'Amanda Wilson', amount: 25, status: 'processing', date: '2024-01-14' },
  ]);

  const [products] = useState([
    { id: '1', name: 'Ultimate Mom Planner 2024', price: 45, sales: 234, status: 'active' },
    { id: '2', name: 'Kids Learning Activity Pack', price: 25, sales: 156, status: 'active' },
    { id: '3', name: 'Family Meal Planning Kit', price: 35, sales: 89, status: 'active' },
    { id: '4', name: 'Self-Care Tracker Bundle', price: 30, sales: 178, status: 'draft' },
  ]);

  const handleAddProduct = () => {
    toast({
      title: "Add Product",
      description: "Add product functionality would be implemented here.",
    });
  };

  const handleEditProduct = (productId: string) => {
    toast({
      title: "Edit Product",
      description: `Edit product ${productId} functionality would be implemented here.`,
    });
  };

  const handleDeleteProduct = (productId: string) => {
    toast({
      title: "Delete Product",
      description: `Delete product ${productId} functionality would be implemented here.`,
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your MomLife Store and track your business performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">GH₵ {stats.revenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +15.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.products}</div>
              <p className="text-xs text-muted-foreground">
                +3 new this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  Latest orders from your customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.customer}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={
                          order.status === 'completed' ? 'default' :
                          order.status === 'pending' ? 'secondary' : 'outline'
                        }>
                          {order.status}
                        </Badge>
                        <div className="text-right">
                          <p className="font-medium">GH₵ {order.amount}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Products</CardTitle>
                    <CardDescription>
                      Manage your digital products
                    </CardDescription>
                  </div>
                  <Button onClick={handleAddProduct}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-custom-mint rounded-lg"></div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {product.sales} sales
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={product.status === 'active' ? 'default' : 'secondary'}>
                          {product.status}
                        </Badge>
                        <div className="text-right">
                          <p className="font-medium">GH₵ {product.price}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleEditProduct(product.id)}
                          >
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  View and manage your customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customer management functionality would be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Store Settings</CardTitle>
                <CardDescription>
                  Configure your store preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input id="storeName" defaultValue="MomLife Store" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Base Currency</Label>
                  <Input id="currency" defaultValue="GH₵ (Ghana Cedis)" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input id="email" defaultValue="support@momlifestore.com" />
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
