import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Calendar } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  cost: string;
  year: string;
  description: string;
  image: string;
  features: string[];
}

interface ProjectGalleryProps {
  projects: Project[];
  showFilters?: boolean;
  maxProjects?: number;
}

const categories = [
  { id: "all", label: "All Projects" },
  { id: "kitchen", label: "Kitchens" },
  { id: "bathroom", label: "Bathrooms" },
  { id: "exterior", label: "Exterior" },
  { id: "flooring", label: "Flooring" },
];

export default function ProjectGallery({ 
  projects, 
  showFilters = true, 
  maxProjects 
}: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = maxProjects 
    ? filteredProjects.slice(0, maxProjects)
    : filteredProjects;

  return (
    <div data-testid="project-gallery">
      {/* Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap justify-center mb-12 gap-2" data-testid="project-filters">
          {categories.map((category) => {
            const count = category.id === "all" 
              ? projects.length 
              : projects.filter(p => p.category === category.id).length;
            
            return (
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
                {category.label} ({count})
              </Button>
            );
          })}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
        {displayedProjects.map((project, index) => (
          <Card 
            key={project.id}
            className="bg-white hover:shadow-xl transition-shadow overflow-hidden group"
            data-testid={`project-card-${index}`}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
              
              {/* Project Details */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-warm-gray" data-testid={`project-location-${index}`}>
                  <MapPin className="mr-2 h-4 w-4" />
                  {project.location}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-warm-gray" data-testid={`project-year-${index}`}>
                    <Calendar className="mr-2 h-4 w-4" />
                    {project.year}
                  </div>
                  
                  <div className="flex items-center text-texas-orange font-semibold" data-testid={`project-cost-${index}`}>
                    <DollarSign className="mr-1 h-4 w-4" />
                    {project.cost.replace('$', '')}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {displayedProjects.length === 0 && (
        <div className="text-center py-12" data-testid="no-projects">
          <p className="text-warm-gray text-lg">No projects found for this category.</p>
        </div>
      )}

      {maxProjects && filteredProjects.length > maxProjects && (
        <div className="text-center mt-8">
          <Button 
            variant="outline"
            className="border-texas-navy text-texas-navy hover:bg-texas-navy hover:text-white"
            data-testid="button-view-all-projects"
          >
            View All Projects ({filteredProjects.length - maxProjects} more)
          </Button>
        </div>
      )}
    </div>
  );
}
