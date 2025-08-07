import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="link-logo">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-texas-navy">Top Notch Renovations</h1>
              <p className="text-xs text-warm-gray">Bryan • College Station</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-texas-navy"
                      : "text-warm-gray hover:text-texas-orange"
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-texas-orange text-white hover:bg-orange-600" data-testid="button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-texas-navy"
                          : "text-warm-gray hover:text-texas-orange"
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="bg-texas-orange text-white hover:bg-orange-600 w-full" data-testid="mobile-button-get-quote">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
