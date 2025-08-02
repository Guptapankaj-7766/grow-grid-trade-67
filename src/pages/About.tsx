import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Layout/Navbar';
import { 
  IndianRupee, 
  Tractor, 
  Droplets, 
  Zap, 
  GraduationCap, 
  Heart, 
  Shield,
  TrendingUp,
  Users,
  ExternalLink
} from 'lucide-react';

const About = () => {
  const subsidies = [
    {
      title: "PM-KISAN Scheme",
      description: "Direct income support of ₹6,000 per year to eligible farmer families",
      amount: "₹6,000/year",
      icon: <IndianRupee className="h-6 w-6 text-primary" />,
      eligibility: "Small and marginal farmers with cultivable land",
      status: "Active"
    },
    {
      title: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme providing financial support in case of crop loss",
      amount: "Up to ₹2 Lakh",
      icon: <Shield className="h-6 w-6 text-primary" />,
      eligibility: "All farmers growing notified crops",
      status: "Active"
    },
    {
      title: "Kisan Credit Card (KCC)",
      description: "Credit support for agriculture and allied activities",
      amount: "Based on cropping pattern",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      eligibility: "Farmers with ownership/cultivation rights",
      status: "Active"
    },
    {
      title: "Soil Health Card Scheme",
      description: "Free soil testing to help farmers improve productivity",
      amount: "Free service",
      icon: <Heart className="h-6 w-6 text-primary" />,
      eligibility: "All farmers",
      status: "Active"
    }
  ];

  const services = [
    {
      title: "Pradhan Mantri Krishi Sinchayee Yojana",
      description: "Water conservation and precision irrigation support",
      icon: <Droplets className="h-6 w-6 text-blue-600" />,
      benefits: ["Drip irrigation subsidy", "Sprinkler system support", "Water harvesting"]
    },
    {
      title: "Sub-Mission on Agricultural Mechanization",
      description: "Support for farm mechanization and custom hiring centers",
      icon: <Tractor className="h-6 w-6 text-green-600" />,
      benefits: ["Tractor subsidy", "Equipment hiring", "Training programs"]
    },
    {
      title: "Digital Agriculture Mission",
      description: "Technology adoption for precision farming",
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      benefits: ["Digital platforms", "AI-based solutions", "Data analytics"]
    },
    {
      title: "Extension Services",
      description: "Training and capacity building for farmers",
      icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
      benefits: ["Skill development", "Best practices", "Market linkage"]
    }
  ];

  const impactStats = [
    { label: "Farmers Benefited", value: "11+ Crore", icon: <Users className="h-8 w-8 text-primary" /> },
    { label: "Subsidies Distributed", value: "₹2.8+ Lakh Crore", icon: <IndianRupee className="h-8 w-8 text-primary" /> },
    { label: "Insurance Coverage", value: "5.5+ Crore", icon: <Shield className="h-8 w-8 text-primary" /> },
    { label: "Soil Cards Issued", value: "22+ Crore", icon: <Heart className="h-8 w-8 text-primary" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            🇮🇳 Government of India
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Government Subsidies & Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support schemes and services provided by the Government of India to empower farmers and boost agricultural productivity.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <Card key={index} className="shadow-card text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subsidies Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Major Subsidy Schemes</h2>
            <p className="text-lg text-muted-foreground">
              Financial support schemes to boost farmer income and agricultural development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {subsidies.map((subsidy, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {subsidy.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{subsidy.title}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {subsidy.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {subsidy.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Benefit Amount:</span>
                      <span className="text-lg font-bold text-primary">{subsidy.amount}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Eligibility:</span>
                      <p className="text-sm text-muted-foreground mt-1">{subsidy.eligibility}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Government Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support services for agricultural development and farmer welfare
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-muted/50 rounded-full">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Key Benefits:</span>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="mb-12">
          <Card className="shadow-card bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">How to Apply for Subsidies</CardTitle>
              <CardDescription className="text-center text-lg">
                Simple steps to access government schemes and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Visit Portal</h3>
                  <p className="text-sm text-muted-foreground">
                    Access official government portals like PM-KISAN, JAM Trinity, or visit your nearest CSC
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Submit Documents</h3>
                  <p className="text-sm text-muted-foreground">
                    Provide Aadhaar, land records, bank details, and other required documents
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Get Benefits</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive direct benefit transfers to your bank account after verification
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button variant="hero" className="mr-4">
                  Visit PM-KISAN Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Find Nearest CSC
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Need Help?</CardTitle>
              <CardDescription className="text-center">
                Contact information for scheme-related queries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <h3 className="font-semibold mb-2">PM-KISAN Helpline</h3>
                  <p className="text-2xl font-bold text-primary mb-1">155261</p>
                  <p className="text-sm text-muted-foreground">Toll-free number</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Kisan Call Center</h3>
                  <p className="text-2xl font-bold text-primary mb-1">1800-180-1551</p>
                  <p className="text-sm text-muted-foreground">24x7 support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;