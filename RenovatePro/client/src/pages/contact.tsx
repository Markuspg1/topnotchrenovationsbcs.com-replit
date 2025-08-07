import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/contact/contact-form";
import ConsultationForm from "@/components/contact/consultation-form";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-16" data-testid="page-contact">
      {/* Hero Section */}
      <section className="py-20 bg-texas-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" data-testid="contact-hero-title">
            Ready to Transform Your Home?
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto" data-testid="contact-hero-description">
            Contact Top Notch Renovations today for your free consultation and estimate. 
            We're here to help bring your renovation dreams to life in Bryan & College Station, Texas.
          </p>
        </div>
      </section>

      {/* Contact Information & Forms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl text-texas-navy" data-testid="contact-info-title">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center" data-testid="contact-phone">
                    <Phone className="text-texas-orange mr-4 h-6 w-6" />
                    <div>
                      <div className="font-semibold text-texas-navy">(979) 555-0123</div>
                      <div className="text-sm text-warm-gray">24/7 Emergency Service</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center" data-testid="contact-email">
                    <Mail className="text-texas-orange mr-4 h-6 w-6" />
                    <div>
                      <div className="font-semibold text-texas-navy">info@topnotchrenovationsbcs.com</div>
                      <div className="text-sm text-warm-gray">Quick email response</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-service-areas">
                    <MapPin className="text-texas-orange mr-4 h-6 w-6 mt-1" />
                    <div>
                      <div className="font-semibold text-texas-navy">Service Areas:</div>
                      <div className="text-sm text-warm-gray">
                        Bryan, College Station, Caldwell, Navasota & surrounding Brazos Valley
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-hours">
                    <Clock className="text-texas-orange mr-4 h-6 w-6 mt-1" />
                    <div>
                      <div className="font-semibold text-texas-navy">Business Hours:</div>
                      <div className="text-sm text-warm-gray">
                        Mon-Fri: 7am-6pm<br />
                        Sat: 8am-4pm<br />
                        24/7 Emergency Service
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Service Card */}
              <Card className="mt-6 bg-texas-orange text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center" data-testid="emergency-title">
                    <Shield className="mr-2 h-5 w-5" />
                    Emergency Service
                  </h3>
                  <p className="text-sm mb-3 opacity-90">
                    Need urgent renovation or repair service? We offer 24/7 emergency response for critical issues.
                  </p>
                  <a 
                    href="tel:(979) 555-0123" 
                    className="inline-block bg-white text-texas-orange px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
                    data-testid="button-emergency-service"
                  >
                    Emergency Service
                  </a>
                </CardContent>
              </Card>

              {/* Credentials Card */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-texas-navy flex items-center" data-testid="credentials-title">
                    <Award className="mr-2 h-5 w-5 text-texas-orange" />
                    Licensed & Insured
                  </h3>
                  <div className="space-y-2 text-sm text-warm-gray">
                    <div>Texas Contractor License #123456</div>
                    <div>$2M Liability Coverage</div>
                    <div>OSHA Safety Certified</div>
                    <div>A+ BBB Rating</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Forms */}
            <div className="lg:col-span-2 space-y-8">
              <ContactForm />
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-texas-navy mb-4" data-testid="service-area-title">
              Proudly Serving Bryan & College Station
            </h2>
            <p className="text-xl text-warm-gray" data-testid="service-area-description">
              As a locally owned and operated renovation company, we're dedicated to transforming homes throughout the Brazos Valley area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-area-bryan">
              <CardContent className="p-6">
                <MapPin className="text-texas-orange h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold text-texas-navy">Bryan, TX</h3>
                <p className="text-sm text-warm-gray">Complete renovation services</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-area-college-station">
              <CardContent className="p-6">
                <MapPin className="text-texas-orange h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold text-texas-navy">College Station, TX</h3>
                <p className="text-sm text-warm-gray">Expert home improvements</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-area-caldwell">
              <CardContent className="p-6">
                <MapPin className="text-texas-orange h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold text-texas-navy">Caldwell, TX</h3>
                <p className="text-sm text-warm-gray">Quality craftsmanship</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-area-navasota">
              <CardContent className="p-6">
                <MapPin className="text-texas-orange h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold text-texas-navy">Navasota, TX</h3>
                <p className="text-sm text-warm-gray">Trusted local service</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-white max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-texas-navy mb-4" data-testid="why-local-title">
                  Why Choose Local?
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start">
                    <Award className="text-texas-orange mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-texas-navy">Local Expertise</div>
                      <div className="text-sm text-warm-gray">Deep understanding of local building codes and permits</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="text-texas-orange mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-texas-navy">Established Relationships</div>
                      <div className="text-sm text-warm-gray">Strong partnerships with local suppliers and inspectors</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-texas-orange mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-texas-navy">Quick Response</div>
                      <div className="text-sm text-warm-gray">Fast response times for consultations and service calls</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-texas-orange mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-texas-navy">Community Commitment</div>
                      <div className="text-sm text-warm-gray">Dedicated to serving our Texas neighbors and community</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
