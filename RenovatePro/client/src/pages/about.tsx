import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Award, Users, Clock, Shield, Star, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Michael Rodriguez",
    role: "Founder & General Contractor",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Licensed general contractor with over 15 years of experience in residential renovations throughout the Brazos Valley."
  },
  {
    name: "Sarah Johnson",
    role: "Design Consultant",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Interior design specialist helping homeowners create functional and beautiful spaces that reflect their lifestyle."
  },
  {
    name: "David Chen",
    role: "Project Manager",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Oversees all project timelines, quality control, and client communication to ensure smooth renovation experiences."
  }
];

const certifications = [
  {
    icon: Shield,
    title: "Texas Licensed Contractor",
    description: "License #123456",
    detail: "Fully licensed to perform all residential renovation work in Texas"
  },
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "$2M Liability Coverage",
    detail: "Comprehensive insurance protection for every project"
  },
  {
    icon: Award,
    title: "OSHA Safety Certified",
    description: "Safety First Approach",
    detail: "All team members trained in workplace safety protocols"
  },
  {
    icon: Star,
    title: "A+ BBB Rating",
    description: "Excellent Customer Service",
    detail: "Accredited business with outstanding customer satisfaction"
  }
];

const stats = [
  { number: "15+", label: "Years Experience", description: "Serving Bryan-College Station since 2009" },
  { number: "500+", label: "Projects Completed", description: "Successful renovations throughout Brazos Valley" },
  { number: "100%", label: "Client Satisfaction", description: "Committed to exceeding expectations" },
  { number: "24/7", label: "Emergency Service", description: "Available when you need us most" }
];

export default function About() {
  return (
    <div className="pt-16" data-testid="page-about">
      {/* Hero Section */}
      <section className="py-20 bg-texas-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6" data-testid="about-hero-title">
                About Top Notch Renovations
              </h1>
              <p className="text-xl opacity-90 mb-8" data-testid="about-hero-description">
                With over 15 years of experience serving the Bryan-College Station area, 
                we're passionate about transforming homes and exceeding expectations. 
                Our commitment to quality craftsmanship and exceptional customer service 
                has made us the trusted choice for renovation projects throughout the Brazos Valley.
              </p>
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-texas-orange hover:bg-orange-600 text-white"
                  data-testid="button-get-started"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
                alt="Professional construction team"
                className="rounded-lg shadow-lg h-full object-cover"
                data-testid="about-hero-image-1"
              />
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=280"
                  alt="Renovation team member at work"
                  className="rounded-lg shadow-lg w-full object-cover"
                  data-testid="about-hero-image-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=280"
                  alt="Quality construction tools and materials"
                  className="rounded-lg shadow-lg w-full object-cover"
                  data-testid="about-hero-image-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="stats-section">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl font-bold text-texas-navy mb-2" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-warm-gray mb-2" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
                <div className="text-sm text-warm-gray" data-testid={`stat-description-${index}`}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-texas-navy mb-6" data-testid="story-title">
              Our Story
            </h2>
            <div className="text-lg text-warm-gray space-y-6" data-testid="story-content">
              <p>
                Top Notch Renovations was founded in 2009 with a simple mission: to provide homeowners 
                in Bryan and College Station with exceptional renovation services that transform their 
                living spaces while delivering outstanding value and customer service.
              </p>
              <p>
                What started as a small family business has grown into one of the most trusted renovation 
                companies in the Brazos Valley. Our team of licensed, insured professionals combines 
                traditional craftsmanship with modern techniques to deliver renovations that enhance 
                both the beauty and value of your home.
              </p>
              <p>
                We understand that renovating your home is a significant investment, and we're committed 
                to making the process as smooth and stress-free as possible. From initial consultation 
                through final cleanup, we're dedicated to exceeding your expectations at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-texas-navy mb-6" data-testid="team-title">
              Meet Our Team
            </h2>
            <p className="text-xl text-warm-gray" data-testid="team-description">
              Our experienced professionals are dedicated to bringing your renovation vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="text-center" data-testid={`team-member-${index}`}>
                <CardContent className="p-8">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    data-testid={`team-member-image-${index}`}
                  />
                  <h3 className="text-xl font-semibold text-texas-navy mb-2" data-testid={`team-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <div className="text-texas-orange font-medium mb-2" data-testid={`team-member-role-${index}`}>
                    {member.role}
                  </div>
                  <Badge variant="secondary" className="mb-4" data-testid={`team-member-experience-${index}`}>
                    {member.experience}
                  </Badge>
                  <p className="text-warm-gray text-sm" data-testid={`team-member-bio-${index}`}>
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-texas-navy mb-6" data-testid="certifications-title">
              Our Certifications & Credentials
            </h2>
            <p className="text-xl text-warm-gray" data-testid="certifications-description">
              Licensed, insured, and committed to the highest standards of quality and safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="text-center hover:shadow-lg transition-shadow" data-testid={`certification-${index}`}>
                <CardContent className="p-6">
                  <cert.icon className="text-texas-orange text-4xl mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-texas-navy mb-2" data-testid={`certification-title-${index}`}>
                    {cert.title}
                  </h3>
                  <div className="text-texas-orange font-medium mb-2" data-testid={`certification-description-${index}`}>
                    {cert.description}
                  </div>
                  <p className="text-sm text-warm-gray" data-testid={`certification-detail-${index}`}>
                    {cert.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-texas-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-testid="values-title">
              Our Values
            </h2>
            <p className="text-xl opacity-90" data-testid="values-description">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="value-quality">
              <Award className="text-texas-orange text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Quality Craftsmanship</h3>
              <p className="text-sm opacity-90">
                We never compromise on quality, using only the finest materials and proven techniques.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-reliability">
              <Clock className="text-texas-orange text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Reliable Service</h3>
              <p className="text-sm opacity-90">
                On-time completion and clear communication throughout every project.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-integrity">
              <Shield className="text-texas-orange text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-sm opacity-90">
                Honest pricing, transparent processes, and standing behind our work.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-community">
              <Users className="text-texas-orange text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Community Focused</h3>
              <p className="text-sm opacity-90">
                Proud to serve our neighbors in Bryan, College Station, and the Brazos Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-texas-navy mb-6" data-testid="about-cta-title">
            Ready to Work with Top Notch Renovations?
          </h2>
          <p className="text-xl text-warm-gray mb-8" data-testid="about-cta-description">
            Experience the difference that quality craftsmanship and exceptional service can make. 
            Contact us today for your free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-texas-orange hover:bg-orange-600 text-white"
                data-testid="button-schedule-consultation-cta"
              >
                Schedule Free Consultation
              </Button>
            </Link>
            
            <a href="tel:(979) 555-0123">
              <Button 
                size="lg"
                variant="outline"
                className="border-texas-navy text-texas-navy hover:bg-texas-navy hover:text-white"
                data-testid="button-call-now-cta"
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
