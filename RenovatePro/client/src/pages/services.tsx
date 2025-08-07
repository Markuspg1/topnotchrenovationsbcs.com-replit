import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Utensils, Bath, Layers, Home, PaintBucket, Wrench, Check, Phone, MapPin, Clock } from "lucide-react";

const services = [
  {
    id: "kitchen",
    icon: Utensils,
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into the heart of your home with our complete remodeling services.",
    longDescription: "Our kitchen renovation experts will work with you to create a space that combines functionality with style. We handle everything from initial design consultation to final installation, ensuring your new kitchen meets all your needs and exceeds your expectations.",
    features: [
      "Custom cabinet design and installation",
      "Granite, quartz, and marble countertops",
      "Subway tile and decorative backsplashes",
      "Kitchen island construction",
      "Appliance installation and upgrades",
      "Lighting fixture installation",
      "Plumbing updates and modifications",
      "Flooring installation",
    ],
    priceRange: "$15,000 - $50,000",
    timeline: "3-6 weeks",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    badge: "Most Popular"
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "Bathroom Remodeling",
    description: "Create a spa-like retreat with our luxury bathroom renovation services.",
    longDescription: "From powder rooms to master bathroom suites, we transform bathrooms into luxurious spaces that combine comfort with functionality. Our team specializes in modern designs, accessibility features, and high-end finishes.",
    features: [
      "Walk-in shower installation",
      "Freestanding and built-in tubs",
      "Custom vanity and storage solutions",
      "Luxury tile work and fixtures",
      "Heated floors and towel racks",
      "Medicine cabinet installation",
      "Accessibility modifications",
      "Lighting and ventilation upgrades",
    ],
    priceRange: "$8,000 - $35,000",
    timeline: "2-4 weeks",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "flooring",
    icon: Layers,
    title: "Flooring Installation",
    description: "Premium flooring solutions for every room in your home.",
    longDescription: "Whether you're looking for the warmth of hardwood, the durability of tile, or the convenience of luxury vinyl, our flooring experts will help you choose and install the perfect flooring for your lifestyle and budget.",
    features: [
      "Hardwood and engineered wood floors",
      "Luxury vinyl plank and tile",
      "Ceramic and porcelain tile",
      "Natural stone installation",
      "Carpet installation and replacement",
      "Subfloor preparation and repair",
      "Transition strip installation",
      "Floor refinishing services",
    ],
    priceRange: "$3 - $15 per sq ft",
    timeline: "1-2 weeks",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "roofing",
    icon: Home,
    title: "Roofing Services",
    description: "Comprehensive roofing solutions to protect your home.",
    longDescription: "Our experienced roofing team provides complete roof replacement, repairs, and maintenance services. We work with all roofing materials and offer emergency services to protect your home from Texas weather.",
    features: [
      "Complete roof replacement",
      "Roof repair and leak detection",
      "Asphalt, wood, and slate shingles",
      "Gutter installation and repair",
      "Roof inspection services",
      "Emergency roof repairs",
      "Skylight installation",
      "Attic ventilation improvements",
    ],
    priceRange: "Free Inspection",
    timeline: "1-3 days",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    badge: "24/7 Emergency"
  },
  {
    id: "exterior",
    icon: PaintBucket,
    title: "Exterior Renovation",
    description: "Boost your home's curb appeal with our exterior renovation services.",
    longDescription: "First impressions matter. Our exterior renovation services will transform the outside of your home, increasing both curb appeal and property value. We handle everything from siding to landscaping coordination.",
    features: [
      "Siding installation and repair",
      "Window and door replacement",
      "Exterior painting services",
      "Front porch construction",
      "Deck and patio installation",
      "Driveway and walkway improvements",
      "Outdoor lighting installation",
      "Landscaping coordination",
    ],
    priceRange: "$20,000 - $60,000",
    timeline: "2-6 weeks",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "full-home",
    icon: Wrench,
    title: "Full Home Renovation",
    description: "Complete home transformations from concept to completion.",
    longDescription: "Planning a major renovation? Our full-service team manages every aspect of your home transformation, from initial design through final cleanup. We coordinate all trades and handle permits, so you don't have to.",
    features: [
      "Whole house design and planning",
      "Permit acquisition and management",
      "Structural modifications",
      "Systems upgrades (electrical, plumbing, HVAC)",
      "Interior and exterior work",
      "Project management and coordination",
      "Quality inspections and cleanup",
      "Warranty on all work performed",
    ],
    priceRange: "$50 - $120 per sq ft",
    timeline: "3-6 months",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    badge: "Full Service"
  },
];

export default function Services() {
  return (
    <div className="pt-16" data-testid="page-services">
      {/* Hero Section */}
      <section className="py-20 bg-texas-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" data-testid="services-hero-title">
            Our Renovation Services
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8" data-testid="services-hero-description">
            From single room makeovers to complete home transformations, 
            Top Notch Renovations delivers exceptional results for homeowners 
            throughout Bryan and College Station, Texas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4" />
              Bryan & College Station
            </div>
            <div className="flex items-center text-sm">
              <Phone className="mr-2 h-4 w-4" />
              (979) 555-0123
            </div>
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4" />
              Licensed & Insured
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`service-detail-${index}`}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover"
                      data-testid={`service-detail-image-${index}`}
                    />
                    {service.badge && (
                      <Badge 
                        className="absolute top-4 left-4 bg-texas-orange text-white"
                        data-testid={`service-badge-${index}`}
                      >
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center mb-4">
                        <service.icon className="text-texas-orange text-3xl mr-4" />
                        <CardTitle className="text-2xl text-texas-navy" data-testid={`service-detail-title-${index}`}>
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="px-0">
                      <p className="text-lg text-warm-gray mb-4" data-testid={`service-detail-description-${index}`}>
                        {service.description}
                      </p>
                      
                      <p className="text-warm-gray mb-6" data-testid={`service-detail-long-description-${index}`}>
                        {service.longDescription}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-texas-navy mb-3">What's Included:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-start text-sm text-warm-gray"
                              data-testid={`service-feature-${index}-${featureIndex}`}
                            >
                              <Check className="text-green-600 mr-2 h-4 w-4 mt-0.5 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="font-semibold text-texas-navy">Price Range</div>
                          <div className="text-texas-orange font-bold" data-testid={`service-price-${index}`}>
                            {service.priceRange}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-texas-navy">Timeline</div>
                          <div className="text-warm-gray" data-testid={`service-timeline-${index}`}>
                            {service.timeline}
                          </div>
                        </div>
                      </div>
                      
                      <Link href="/contact">
                        <Button 
                          className="bg-texas-orange hover:bg-orange-600 text-white"
                          data-testid={`button-get-quote-${index}`}
                        >
                          Get Free Quote
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-texas-navy mb-6" data-testid="services-cta-title">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-warm-gray mb-8" data-testid="services-cta-description">
            Contact us today for a free consultation and detailed estimate for your renovation project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-texas-orange hover:bg-orange-600 text-white"
                data-testid="button-schedule-consultation"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
            
            <a href="tel:(979) 555-0123">
              <Button 
                size="lg"
                variant="outline"
                className="border-texas-navy text-texas-navy hover:bg-texas-navy hover:text-white"
                data-testid="button-call-now"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (979) 555-0123
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
