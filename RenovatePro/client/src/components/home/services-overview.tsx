import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Utensils, Bath, Layers, Home, PaintBucket, Wrench, Check, Phone } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Kitchen Remodeling",
    description: "Complete kitchen transformations including cabinets, countertops, flooring, and appliance installation.",
    features: ["Custom cabinet design", "Granite & quartz countertops", "Backsplash installation"],
    price: "Starting at $15,000",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    description: "Luxury bathroom renovations with modern fixtures, tile work, and accessibility features.",
    features: ["Walk-in shower installation", "Custom vanity & storage", "Luxury tile & fixtures"],
    price: "Starting at $8,000",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Layers,
    title: "Flooring Installation",
    description: "Expert installation of hardwood, tile, vinyl, and laminate flooring throughout your home.",
    features: ["Hardwood & engineered floors", "Luxury vinyl & laminate", "Tile installation & repair"],
    price: "Starting at $3/sq ft",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Home,
    title: "Roofing Services",
    description: "Complete roofing solutions including replacement, repair, and gutter installation.",
    features: ["Roof replacement & repair", "Gutter installation", "Emergency roof service"],
    price: "Free Inspection",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: PaintBucket,
    title: "Exterior Renovation",
    description: "Enhance your home's curb appeal with siding, windows, doors, and exterior improvements.",
    features: ["Siding installation & repair", "Window & door replacement", "Exterior painting"],
    price: "Custom Quote",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Wrench,
    title: "Full Home Renovation",
    description: "Complete home transformations from concept to completion with our experienced team.",
    features: ["Whole house planning", "Permit & design services", "Project management"],
    price: "$50-120/sq ft",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white" data-testid="services-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-texas-navy mb-4" data-testid="services-title">
            Our Renovation Services
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto" data-testid="services-description">
            We specialize in comprehensive home renovations that transform your space and add value to your property.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-gray-50 hover:shadow-xl transition-shadow overflow-hidden"
              data-testid={`service-card-${index}`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
                data-testid={`service-image-${index}`}
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <service.icon className="text-texas-orange text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-texas-navy" data-testid={`service-name-${index}`}>
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-warm-gray mb-4" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                
                <ul className="text-sm text-warm-gray space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center" data-testid={`service-feature-${index}-${featureIndex}`}>
                      <Check className="text-green-600 mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-texas-navy font-semibold mb-4" data-testid={`service-price-${index}`}>
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-texas-orange hover:bg-orange-600 text-white"
            data-testid="button-schedule-consultation"
          >
            <Phone className="mr-2 h-5 w-5" />
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
