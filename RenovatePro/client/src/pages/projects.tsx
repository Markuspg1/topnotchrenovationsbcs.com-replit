import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Makeover",
    category: "kitchen",
    location: "College Station, TX",
    cost: "$28,000",
    description: "Complete kitchen transformation featuring custom white cabinets, quartz countertops, and subway tile backsplash.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Custom Cabinets", "Quartz Countertops", "Subway Tile", "Pendant Lighting"]
  },
  {
    id: 2,
    title: "Luxury Kitchen Remodel",
    category: "kitchen",
    location: "Bryan, TX", 
    cost: "$45,000",
    description: "High-end kitchen renovation featuring custom dark cabinetry, marble countertops, and premium appliances.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Dark Cabinetry", "Marble Counters", "Premium Appliances", "Kitchen Island"]
  },
  {
    id: 3,
    title: "Master Bathroom Refresh",
    category: "bathroom",
    location: "College Station, TX",
    cost: "$18,000",
    description: "Spa-like bathroom renovation featuring walk-in shower, floating vanity, and luxury tile work.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Walk-in Shower", "Floating Vanity", "Luxury Tile", "Modern Fixtures"]
  },
  {
    id: 4,
    title: "Luxury Bathroom Suite",
    category: "bathroom",
    location: "Bryan, TX",
    cost: "$32,000",
    description: "Complete bathroom transformation with freestanding tub, custom vanity, and premium finishes.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Freestanding Tub", "Custom Vanity", "Premium Finishes", "Designer Lighting"]
  },
  {
    id: 5,
    title: "Complete Exterior Makeover",
    category: "exterior",
    location: "College Station, TX",
    cost: "$35,000",
    description: "Full exterior renovation including new siding, windows, front door, and landscaping design.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["New Siding", "Window Replacement", "Front Door", "Landscaping"]
  },
  {
    id: 6,
    title: "Curb Appeal Enhancement",
    category: "exterior",
    location: "Bryan, TX",
    cost: "$22,000",
    description: "Exterior refresh with updated paint, new front porch, and enhanced architectural details.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Fresh Paint", "Front Porch", "Architectural Details", "New Shutters"]
  },
  {
    id: 7,
    title: "Hardwood Floor Installation",
    category: "flooring",
    location: "College Station, TX",
    cost: "$12,000",
    description: "Beautiful oak hardwood flooring installation throughout main living areas.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Oak Hardwood", "Professional Installation", "Stain & Finish", "Trim Work"]
  },
  {
    id: 8,
    title: "Luxury Vinyl Plank Flooring",
    category: "flooring",
    location: "Bryan, TX",
    cost: "$8,500",
    description: "Waterproof luxury vinyl plank flooring installation in kitchen, bathrooms, and entryway.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Waterproof LVP", "Multiple Rooms", "Seamless Install", "Baseboards"]
  }
];

const categories = [
  { id: "all", label: "All Projects", count: projects.length },
  { id: "kitchen", label: "Kitchens", count: projects.filter(p => p.category === "kitchen").length },
  { id: "bathroom", label: "Bathrooms", count: projects.filter(p => p.category === "bathroom").length },
  { id: "exterior", label: "Exterior", count: projects.filter(p => p.category === "exterior").length },
  { id: "flooring", label: "Flooring", count: projects.filter(p => p.category === "flooring").length },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16" data-testid="page-projects">
      {/* Hero Section */}
      <section className="py-20 bg-texas-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" data-testid="projects-hero-title">
            Our Recent Projects
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto" data-testid="projects-hero-description">
            See the quality transformations we've delivered to homeowners 
            throughout Bryan & College Station, Texas. Each project showcases 
            our commitment to excellence and attention to detail.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2" data-testid="project-filters">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`${
                  activeFilter === category.id
                    ? "bg-texas-orange hover:bg-orange-600 text-white"
                    : "border-gray-300 text-warm-gray hover:bg-texas-orange hover:text-white"
                }`}
                data-testid={`filter-${category.id}`}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="bg-white hover:shadow-xl transition-shadow overflow-hidden"
                data-testid={`project-card-${index}`}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    data-testid={`project-image-${index}`}
                  />
                  <Badge 
                    className="absolute top-4 left-4 bg-texas-orange text-white"
                    data-testid={`project-category-${index}`}
                  >
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-texas-navy mb-2" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-warm-gray mb-4" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex}
                          variant="secondary" 
                          className="text-xs"
                          data-testid={`project-feature-${index}-${featureIndex}`}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-warm-gray" data-testid={`project-location-${index}`}>
                      <MapPin className="mr-1 h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm font-semibold text-texas-orange" data-testid={`project-cost-${index}`}>
                      <DollarSign className="mr-1 h-4 w-4" />
                      {project.cost.replace('$', '')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12" data-testid="no-projects">
              <p className="text-warm-gray text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-texas-navy text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6" data-testid="projects-cta-title">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 opacity-90" data-testid="projects-cta-description">
                Let's discuss your renovation dreams and create a space you'll love. 
                Get your free consultation and estimate today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-texas-orange hover:bg-orange-600 text-white"
                  data-testid="button-view-all-projects"
                >
                  View All Projects
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-texas-navy"
                  data-testid="button-get-estimate"
                >
                  Get Free Estimate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
