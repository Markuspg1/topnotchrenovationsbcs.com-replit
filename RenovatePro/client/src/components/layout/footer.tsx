import { Link } from "wouter";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Top Notch Renovations</h3>
            <p className="text-gray-300 mb-4">
              Premier home renovation services in Bryan & College Station, Texas. 
              Transforming homes with quality craftsmanship and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-texas-orange transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-texas-orange transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-texas-orange transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-texas-orange transition-colors" data-testid="footer-link-kitchen">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-texas-orange transition-colors" data-testid="footer-link-bathroom">
                  Bathroom Renovation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-texas-orange transition-colors" data-testid="footer-link-flooring">
                  Flooring Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-texas-orange transition-colors" data-testid="footer-link-roofing">
                  Roofing Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-texas-orange transition-colors" data-testid="footer-link-exterior">
                  Exterior Renovation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-texas-orange transition-colors" data-testid="footer-link-full-home">
                  Full Home Renovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Bryan, Texas</li>
              <li>College Station, Texas</li>
              <li>Caldwell, Texas</li>
              <li>Navasota, Texas</li>
              <li>Brazos Valley Area</li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold text-white mb-2">License & Insurance</h5>
              <p className="text-sm text-gray-300">Texas Contractor License #123456</p>
              <p className="text-sm text-gray-300">Fully Insured & Bonded</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center" data-testid="contact-phone">
                📞 (979) 555-0123
              </li>
              <li className="flex items-center" data-testid="contact-email">
                ✉️ info@topnotchrenovationsbcs.com
              </li>
              <li className="flex items-center" data-testid="contact-website">
                🌐 topnotchrenovationsbcs.com
              </li>
              <li className="flex items-start" data-testid="contact-hours">
                ⏰ 
                <div className="ml-2">
                  <div>Mon-Fri: 7am-6pm</div>
                  <div>Sat: 8am-4pm</div>
                  <div>24/7 Emergency Service</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Top Notch Renovations. All rights reserved. |{" "}
            <Link href="#" className="hover:text-texas-orange transition-colors" data-testid="link-privacy">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-texas-orange transition-colors" data-testid="link-terms">
              Terms of Service
            </Link>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Serving Bryan, College Station, and the greater Brazos Valley with quality home renovations since 2009.
          </p>
        </div>
      </div>
    </footer>
  );
}
