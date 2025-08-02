import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Layout/Navbar';
import { useAuth } from '@/contexts/AuthContext';
import { 
  CloudRain, 
  Sun, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge, 
  Calendar,
  MapPin,
  RefreshCw,
  AlertTriangle,
  TrendingUp,
  Activity
} from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  visibility: number;
  condition: string;
  uvIndex: number;
  forecast: Array<{
    date: string;
    maxTemp: number;
    minTemp: number;
    condition: string;
    humidity: number;
    precipitation: number;
  }>;
}

const Monitoring = () => {
  const { user } = useAuth();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Mock weather data for demonstration
  useEffect(() => {
    const fetchWeatherData = () => {
      setLoading(true);
      // Simulating API call
      setTimeout(() => {
        setWeatherData({
          location: "Delhi, India",
          temperature: 28,
          humidity: 65,
          windSpeed: 12,
          windDirection: "NW",
          pressure: 1013,
          visibility: 10,
          condition: "Partly Cloudy",
          uvIndex: 6,
          forecast: [
            { date: "Today", maxTemp: 32, minTemp: 22, condition: "Sunny", humidity: 58, precipitation: 0 },
            { date: "Tomorrow", maxTemp: 30, minTemp: 20, condition: "Partly Cloudy", humidity: 62, precipitation: 10 },
            { date: "Day 3", maxTemp: 28, minTemp: 18, condition: "Rainy", humidity: 78, precipitation: 80 },
            { date: "Day 4", maxTemp: 29, minTemp: 19, condition: "Cloudy", humidity: 68, precipitation: 20 },
            { date: "Day 5", maxTemp: 31, minTemp: 21, condition: "Sunny", humidity: 55, precipitation: 0 }
          ]
        });
        setLoading(false);
        setLastUpdated(new Date());
      }, 1000);
    };

    fetchWeatherData();
  }, []);

  const sensorData = [
    { 
      label: "Soil Moisture", 
      value: "67%", 
      status: "optimal", 
      trend: "+2%",
      icon: <Droplets className="h-5 w-5" />,
      color: "text-blue-600"
    },
    { 
      label: "Soil Temperature", 
      value: "24°C", 
      status: "optimal", 
      trend: "+1°C",
      icon: <Thermometer className="h-5 w-5" />,
      color: "text-orange-600"
    },
    { 
      label: "Air Humidity", 
      value: "58%", 
      status: "optimal", 
      trend: "-3%",
      icon: <Activity className="h-5 w-5" />,
      color: "text-green-600"
    },
    { 
      label: "Light Intensity", 
      value: "45,000 lux", 
      status: "good", 
      trend: "+5%",
      icon: <Sun className="h-5 w-5" />,
      color: "text-yellow-600"
    }
  ];

  const recommendations = [
    {
      type: "irrigation",
      priority: "medium",
      message: "Consider irrigation in 2-3 days based on weather forecast",
      action: "Schedule irrigation"
    },
    {
      type: "pest",
      priority: "low",
      message: "Weather conditions favorable for pest monitoring",
      action: "Inspect crops"
    },
    {
      type: "fertilizer",
      priority: "high",
      message: "Good conditions for nitrogen application before expected rain",
      action: "Apply fertilizer"
    }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'rainy': return <CloudRain className="h-6 w-6 text-blue-500" />;
      case 'partly cloudy': return <Sun className="h-6 w-6 text-gray-500" />;
      default: return <Sun className="h-6 w-6 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const refreshWeather = () => {
    setLoading(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Farm Monitoring Dashboard</h1>
            <p className="text-muted-foreground">Real-time weather and sensor data for optimal farm management</p>
          </div>
          <Button variant="hero" onClick={refreshWeather} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh Data
          </Button>
        </div>

        {/* Weather Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Current Weather
                  </CardTitle>
                  <CardDescription>
                    {weatherData?.location} • Last updated: {lastUpdated.toLocaleTimeString()}
                  </CardDescription>
                </div>
                {weatherData && getWeatherIcon(weatherData.condition)}
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-20 bg-muted rounded"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-muted rounded"></div>
                    <div className="h-16 bg-muted rounded"></div>
                    <div className="h-16 bg-muted rounded"></div>
                  </div>
                </div>
              ) : weatherData ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary mb-2">{weatherData.temperature}°C</p>
                      <p className="text-lg text-muted-foreground">{weatherData.condition}</p>
                      <Badge variant="secondary" className="mt-2">
                        Feels like {weatherData.temperature + 2}°C
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Droplets className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                        <p className="text-sm text-muted-foreground">Humidity</p>
                        <p className="font-semibold">{weatherData.humidity}%</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Wind className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                        <p className="text-sm text-muted-foreground">Wind</p>
                        <p className="font-semibold">{weatherData.windSpeed} km/h {weatherData.windDirection}</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Gauge className="h-5 w-5 mx-auto mb-1 text-purple-600" />
                        <p className="text-sm text-muted-foreground">Pressure</p>
                        <p className="font-semibold">{weatherData.pressure} mb</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Eye className="h-5 w-5 mx-auto mb-1 text-green-600" />
                        <p className="text-sm text-muted-foreground">Visibility</p>
                        <p className="font-semibold">{weatherData.visibility} km</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                  <p className="text-muted-foreground">Unable to load weather data</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Farm Recommendations</CardTitle>
              <CardDescription>AI-powered insights based on current conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getPriorityColor(rec.priority)}>
                        {rec.priority} priority
                      </Badge>
                    </div>
                    <p className="text-sm mb-2">{rec.message}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      {rec.action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5-Day Forecast */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              5-Day Weather Forecast
            </CardTitle>
            <CardDescription>Plan your farming activities based on upcoming weather</CardDescription>
          </CardHeader>
          <CardContent>
            {weatherData && (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <p className="font-medium mb-2">{day.date}</p>
                    <div className="flex justify-center mb-2">
                      {getWeatherIcon(day.condition)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{day.condition}</p>
                    <div className="space-y-1">
                      <p className="font-semibold">{day.maxTemp}° / {day.minTemp}°</p>
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>{day.precipitation}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sensor Data */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sensorData.map((sensor, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 bg-muted/50 rounded-full ${sensor.color}`}>
                    {sensor.icon}
                  </div>
                  <Badge variant={sensor.status === 'optimal' ? 'default' : 'secondary'}>
                    {sensor.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{sensor.label}</p>
                  <p className="text-2xl font-bold mb-1">{sensor.value}</p>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-3 w-3" />
                    <span>{sensor.trend} from yesterday</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitoring;