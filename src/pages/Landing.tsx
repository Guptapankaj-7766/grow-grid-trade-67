import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Layout/Navbar';
import { 
  Sprout, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Smartphone,
  Leaf,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import dashboardPreview from '@/assets/dashboard-preview.jpg';
import marketplaceCrops from '@/assets/marketplace-crops.jpg';

const Landing = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Smart Monitoring",
      description: "Real-time IoT sensor data for optimal crop management"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Direct Marketplace",
      description: "Connect farmers directly with consumers, eliminating middlemen"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data Analytics",
      description: "AI-powered insights for better farming decisions"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Transactions",
      description: "Safe and transparent payment processing"
    }
  ];

  const benefits = [
    "Increase crop yield by up to 30%",
    "Reduce water usage by 25%",
    "Direct farmer-to-consumer sales",
    "Real-time crop monitoring",
    "Weather-based recommendations",
    "Transparent pricing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 animate-slideIn">
              🌾 Smart Agriculture Platform
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-slideIn">
              Revolutionizing Agriculture with{' '}
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Smart Technology
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slideIn">
              Connect farmers with consumers, monitor crops with IoT sensors, and make data-driven decisions 
              to maximize yield and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideIn">
              <Button asChild size="lg" variant="accent" className="text-lg px-8">
                <Link to="/register">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/marketplace">Explore Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Leaf className="h-4 w-4 mr-2" />
              Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything you need for modern farming
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides tools for monitoring, selling, and optimizing your agricultural operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <CheckCircle className="h-4 w-4 mr-2" />
                Benefits
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why choose AgriLink?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of farmers and consumers who are already transforming agriculture with our platform.
              </p>
              
              <div className="grid gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="hero" size="lg">
                <Link to="/register">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={dashboardPreview} 
                alt="AgriLink Dashboard" 
                className="rounded-lg shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">+30% Yield Increase</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-24 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={marketplaceCrops} 
                alt="AgriLink Marketplace" 
                className="rounded-lg shadow-elegant"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Smartphone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Direct Sales</p>
                    <p className="text-sm text-muted-foreground">No middlemen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4">
                <Users className="h-4 w-4 mr-2" />
                Marketplace
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Connect directly with your market
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our marketplace eliminates middlemen, ensuring farmers get fair prices and consumers get fresh, quality produce.
              </p>
              
              <div className="grid gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Direct Connection</h3>
                    <p className="text-muted-foreground">Build relationships between farmers and consumers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Secure Payments</h3>
                    <p className="text-muted-foreground">Safe, transparent, and fast payment processing</p>
                  </div>
                </div>
              </div>
              
              <Button asChild variant="hero" size="lg">
                <Link to="/marketplace">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to transform your farming experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join AgriLink today and be part of the agricultural revolution. Get started for free and see the difference smart farming makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent" className="text-lg px-8">
              <Link to="/register">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                AgriLink
              </span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 AgriLink. Empowering agriculture through technology.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;