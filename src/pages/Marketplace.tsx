import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Layout/Navbar';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  ShoppingCart, 
  Heart,
  Leaf,
  Users,
  Truck
} from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'grains', label: 'Grains' },
    { value: 'herbs', label: 'Herbs' },
    { value: 'dairy', label: 'Dairy' }
  ];

  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      farmer: "Green Valley Farm",
      price: 9.50,
      unit: "kg",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 24,
      distance: "2.3 km",
      category: "vegetables",
      inStock: 150,
      organic: true,
      description: "Fresh, vine-ripened organic tomatoes perfect for salads and cooking.",
      harvestDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Sweet Corn",
      farmer: "Sunshine Acres",
      price: 6.00,
      unit: "kg",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 18,
      distance: "3.1 km",
      category: "vegetables",
      inStock: 80,
      organic: false,
      description: "Sweet, crisp corn harvested at peak freshness.",
      harvestDate: "2024-01-18"
    },
    {
      id: 3,
      name: "Fresh Strawberries",
      farmer: "Berry Paradise",
      price: 12.00,
      unit: "kg",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 31,
      distance: "1.8 km",
      category: "fruits",
      inStock: 45,
      organic: true,
      description: "Juicy, sweet strawberries picked daily for maximum freshness.",
      harvestDate: "2024-01-20"
    },
    {
      id: 4,
      name: "Mixed Salad Greens",
      farmer: "Leaf & Garden",
      price: 5.50,
      unit: "bunch",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 15,
      distance: "4.2 km",
      category: "vegetables",
      inStock: 60,
      organic: true,
      description: "Fresh mix of lettuce, spinach, and arugula.",
      harvestDate: "2024-01-19"
    },
    {
      id: 5,
      name: "Free-Range Eggs",
      farmer: "Happy Hen Farm",
      price: 8.00,
      unit: "dozen",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 42,
      distance: "2.7 km",
      category: "dairy",
      inStock: 30,
      organic: false,
      description: "Fresh eggs from free-range, pasture-raised hens.",
      harvestDate: "2024-01-21"
    },
    {
      id: 6,
      name: "Organic Carrots",
      farmer: "Root Vegetable Co.",
      price: 4.50,
      unit: "kg",
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 12,
      distance: "5.1 km",
      category: "vegetables",
      inStock: 120,
      organic: true,
      description: "Crisp, sweet organic carrots grown in rich soil.",
      harvestDate: "2024-01-17"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
        return parseFloat(a.distance) - parseFloat(b.distance);
      default:
        return 0;
    }
  });

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
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Fresh Local Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover fresh, quality produce directly from local farmers in your area.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products or farmers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="distance">Nearest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {sortedProducts.length} products
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
          </p>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filters active</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                {product.organic && (
                  <Badge className="absolute top-3 left-3 bg-green-600 text-white">
                    <Leaf className="h-3 w-3 mr-1" />
                    Organic
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <p className="text-lg font-bold">${product.price}</p>
                    <p className="text-sm text-muted-foreground">per {product.unit}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Users className="h-4 w-4" />
                  <span>{product.farmer}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{product.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {product.inStock} {product.unit} available
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Truck className="h-3 w-3" />
                    <span>Same day delivery</span>
                  </div>
                </div>
                
                <Button className="w-full" variant="hero">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Load More */}
        {sortedProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;