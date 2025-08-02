import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Layout/Navbar';
import { useAuth } from '@/contexts/AuthContext';
import { 
  ShoppingCart, 
  Package, 
  Heart, 
  Star, 
  TrendingUp, 
  Leaf,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';

const ConsumerDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Orders",
      value: "12",
      change: "3 this month",
      icon: <Package className="h-6 w-6 text-primary" />
    },
    {
      title: "Saved Items",
      value: "6",
      change: "2 new favorites",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Money Saved",
      value: "$234",
      change: "vs retail prices",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    },
    {
      title: "Carbon Footprint",
      value: "-45%",
      change: "reduced this year",
      icon: <Leaf className="h-6 w-6 text-primary" />
    }
  ];

  const recentOrders = [
    { 
      id: "ORD-001", 
      farmer: "Green Valley Farm", 
      items: "Organic Tomatoes, Bell Peppers", 
      total: "$45.50", 
      status: "delivered",
      date: "2024-01-15",
      rating: 5
    },
    { 
      id: "ORD-002", 
      farmer: "Sunshine Acres", 
      items: "Sweet Corn, Carrots", 
      total: "$28.00", 
      status: "shipped",
      date: "2024-01-18",
      rating: null
    },
    { 
      id: "ORD-003", 
      farmer: "Organic Gardens", 
      items: "Mixed Greens, Herbs", 
      total: "$19.75", 
      status: "processing",
      date: "2024-01-20",
      rating: null
    }
  ];

  const recommendations = [
    {
      name: "Fresh Strawberries",
      farmer: "Berry Farm",
      price: "$8.50/kg",
      image: "/placeholder.svg",
      distance: "2.5 km",
      rating: 4.8,
      inSeason: true
    },
    {
      name: "Organic Spinach",
      farmer: "Green Leaf Farm",
      price: "$5.00/bunch",
      image: "/placeholder.svg",
      distance: "3.2 km",
      rating: 4.9,
      inSeason: true
    },
    {
      name: "Free-Range Eggs",
      farmer: "Happy Hen Farm",
      price: "$6.00/dozen",
      image: "/placeholder.svg",
      distance: "1.8 km",
      rating: 4.7,
      inSeason: false
    }
  ];

  const favoritesFarmers = [
    { name: "Green Valley Farm", location: "Local Area", specialties: "Organic Vegetables", rating: 4.9 },
    { name: "Sunshine Acres", location: "2.5 km away", specialties: "Seasonal Fruits", rating: 4.8 },
    { name: "Organic Gardens", location: "4.1 km away", specialties: "Herbs & Greens", rating: 4.7 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-muted-foreground">Discover fresh, local produce from trusted farmers.</p>
          </div>
          <Button variant="hero" asChild>
            <Link to="/marketplace">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Browse Marketplace
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
                    <p className="text-sm text-muted-foreground">{stat.change}</p>
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
                <CardDescription>Track your purchases and deliveries</CardDescription>
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
                        <p className="text-sm text-muted-foreground">{order.farmer}</p>
                        <p className="text-sm">{order.items}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{order.date}</span>
                          {order.rating && (
                            <div className="flex items-center gap-1 ml-auto">
                              {renderStars(order.rating)}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">{order.total}</p>
                        {order.status === 'delivered' && !order.rating && (
                          <Button size="sm" variant="outline" className="mt-2">
                            Rate Order
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/orders">View All Orders</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Fresh picks based on your preferences and season</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.slice(0, 4).map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-card transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.farmer}</p>
                        </div>
                        {item.inSeason && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            In Season
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{item.distance}</span>
                        <div className="flex items-center gap-1 ml-auto">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">{item.price}</span>
                        <Button size="sm" variant="outline">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/marketplace">Explore More Products</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Favorite Farmers */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Favorite Farmers</CardTitle>
                <CardDescription>Your trusted local producers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {favoritesFarmers.map((farmer, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{farmer.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{farmer.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{farmer.location}</p>
                      <p className="text-sm">{farmer.specialties}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/farmers">Discover More Farmers</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Sustainability Impact */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
                <CardDescription>Supporting local agriculture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Carbon Footprint</p>
                      <p className="text-lg font-semibold text-green-600">-45% reduced</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Leaf className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Local Farmers Supported</p>
                      <p className="text-lg font-semibold text-blue-600">8 farmers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium">Money Saved</p>
                      <p className="text-lg font-semibold text-yellow-600">$234 this year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;