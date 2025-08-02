import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Layout/Navbar';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Plus, 
  TrendingUp, 
  Droplets, 
  Thermometer, 
  DollarSign, 
  Package, 
  Users,
  AlertTriangle,
  Activity,
  BarChart3
} from 'lucide-react';

const FarmerDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Revenue",
      value: "$12,540",
      change: "+23% from last month",
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      trending: true
    },
    {
      title: "Active Listings",
      value: "8",
      change: "3 pending approval",
      icon: <Package className="h-6 w-6 text-primary" />
    },
    {
      title: "Orders This Month",
      value: "24",
      change: "+15% from last month",
      icon: <Users className="h-6 w-6 text-primary" />,
      trending: true
    },
    {
      title: "Crop Health Score",
      value: "94%",
      change: "Excellent condition",
      icon: <Activity className="h-6 w-6 text-primary" />
    }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "Fresh Market Co.", product: "Organic Tomatoes", quantity: "50kg", status: "delivered", amount: "$450" },
    { id: "ORD-002", customer: "Green Grocers", product: "Sweet Corn", quantity: "30kg", status: "shipped", amount: "$180" },
    { id: "ORD-003", customer: "Local Restaurant", product: "Bell Peppers", quantity: "20kg", status: "pending", amount: "$320" }
  ];

  const sensorData = [
    { label: "Soil Moisture", value: "67%", status: "optimal", icon: <Droplets className="h-5 w-5" /> },
    { label: "Temperature", value: "24°C", status: "optimal", icon: <Thermometer className="h-5 w-5" /> },
    { label: "Humidity", value: "58%", status: "optimal", icon: <Activity className="h-5 w-5" /> },
    { label: "pH Level", value: "6.8", status: "good", icon: <BarChart3 className="h-5 w-5" /> }
  ];

  const alerts = [
    { type: "warning", message: "Irrigation system maintenance due in 3 days", time: "2 hours ago" },
    { type: "info", message: "Weather forecast: Rain expected tomorrow", time: "5 hours ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-muted-foreground">Here's what's happening on your farm today.</p>
          </div>
          <Button variant="hero" asChild>
            <Link to="/add-crop">
              <Plus className="h-4 w-4 mr-2" />
              Add New Crop
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.trending ? 'text-green-600' : 'text-muted-foreground'} flex items-center gap-1`}>
                      {stat.trending && <TrendingUp className="h-3 w-3" />}
                      {stat.change}
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Orders */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your latest customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-medium">{order.id}</span>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                        <p className="text-sm">{order.product} - {order.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">{order.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/orders">View All Orders</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Crop Listings */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Crop Listings</CardTitle>
                <CardDescription>Manage your products in the marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Organic Tomatoes</h3>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">150kg available</p>
                    <p className="text-lg font-semibold">$9.00/kg</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Sweet Corn</h3>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">80kg available</p>
                    <p className="text-lg font-semibold">$6.00/kg</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/my-listings">Manage All Listings</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* IoT Sensor Data */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Live Crop Monitoring</CardTitle>
                <CardDescription>Real-time sensor data from your fields</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sensorData.map((sensor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          {sensor.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{sensor.label}</p>
                          <p className="text-lg font-semibold">{sensor.value}</p>
                        </div>
                      </div>
                      <Badge variant={sensor.status === 'optimal' ? 'default' : 'secondary'}>
                        {sensor.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/monitoring">View Detailed Analytics</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Alerts & Notifications</CardTitle>
                <CardDescription>Important updates for your farm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/alerts">View All Alerts</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;