import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Phone, Mail } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "College Station, TX",
    rating: 5,
    text: "Top Notch Renovations completely transformed our outdated kitchen into a modern masterpiece. The team was professional, on-time, and the quality exceeded our expectations.",
    project: "Kitchen Renovation",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Mike R.",
    location: "Bryan, TX",
    rating: 5,
    text: "From start to finish, the bathroom renovation process was smooth and stress-free. The attention to detail and craftsmanship is remarkable. Highly recommend!",
    project: "Bathroom Renovation",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Lisa & Tom J.",
    location: "College Station, TX",
    rating: 5,
    text: "Our whole home renovation was a massive project, but Top Notch handled everything perfectly. Great communication, quality work, and finished on schedule.",
    project: "Home Renovation",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-texas-navy mb-4" data-testid="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="text-xl text-warm-gray" data-testid="testimonials-description">
            See why homeowners in Bryan & College Station trust us with their renovations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="bg-gray-50" data-testid={`testimonial-card-${index}`}>
              <CardContent className="p-6">
                <div className="flex mb-4" data-testid={`testimonial-rating-${index}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-warm-gray mb-4 italic" data-testid={`testimonial-text-${index}`}>
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    data-testid={`testimonial-image-${index}`}
                  />
                  <div>
                    <div className="font-semibold text-texas-navy" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-warm-gray" data-testid={`testimonial-location-${index}`}>
                      {testimonial.location}
                    </div>
                    <div className="text-xs text-texas-orange" data-testid={`testimonial-project-${index}`}>
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-texas-navy text-white max-w-2xl mx-auto" data-testid="cta-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join hundreds of satisfied customers in the Bryan-College Station area
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:(979) 555-0123">
                  <Button 
                    className="bg-texas-orange hover:bg-orange-600 text-white"
                    data-testid="button-call-now"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call (979) 555-0123
                  </Button>
                </a>
                <a href="mailto:info@topnotchrenovationsbcs.com">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-texas-navy bg-transparent"
                    data-testid="button-email-now"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    info@topnotchrenovationsbcs.com
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
