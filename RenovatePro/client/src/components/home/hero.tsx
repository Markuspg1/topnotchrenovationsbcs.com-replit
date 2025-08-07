import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Calculator } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen" data-testid="hero-section">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
            Transform Your Home with{" "}
            <span className="text-texas-orange">Top Notch Renovations</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90" data-testid="hero-description">
            Premier home renovation services in Bryan & College Station, Texas. 
            From kitchens to complete home makeovers, we deliver excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-texas-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                data-testid="button-hero-quote"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </Link>
            
            <a href="tel:(979) 555-0123">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-texas-navy px-8 py-4 text-lg font-semibold bg-transparent"
                data-testid="button-hero-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (979) 555-0123
              </Button>
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto" data-testid="hero-stats">
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5★</div>
              <div className="text-sm opacity-80">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
