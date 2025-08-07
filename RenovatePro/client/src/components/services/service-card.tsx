import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  badge?: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
  image,
  badge,
  index
}: ServiceCardProps) {
  return (
    <Card 
      className="bg-gray-50 hover:shadow-xl transition-shadow overflow-hidden group"
      data-testid={`service-card-${index}`}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          data-testid={`service-card-image-${index}`}
        />
        {badge && (
          <Badge 
            className="absolute top-4 left-4 bg-texas-orange text-white"
            data-testid={`service-card-badge-${index}`}
          >
            {badge}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Icon className="text-texas-orange text-2xl mr-3" />
          <h3 className="text-xl font-semibold text-texas-navy" data-testid={`service-card-title-${index}`}>
            {title}
          </h3>
        </div>
        
        <p className="text-warm-gray mb-4" data-testid={`service-card-description-${index}`}>
          {description}
        </p>
        
        <ul className="text-sm text-warm-gray space-y-1 mb-4">
          {features.map((feature, featureIndex) => (
            <li 
              key={featureIndex} 
              className="flex items-center" 
              data-testid={`service-card-feature-${index}-${featureIndex}`}
            >
              <Check className="text-green-600 mr-2 h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-texas-navy font-semibold" data-testid={`service-card-price-${index}`}>
            {price}
          </div>
        </div>
        
        <Link href="/contact">
          <Button 
            className="w-full bg-texas-orange hover:bg-orange-600 text-white"
            data-testid={`service-card-cta-${index}`}
          >
            Get Free Quote
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
