import { Link, useLocation } from "wouter";
import { Bike, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Rental Info", href: "/rental-info" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-2 rounded-lg group-hover:scale-105 transition-transform">
            <Bike className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">
            SURAJ<span className="text-primary">BIKES</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                isActive(link.href) 
                  ? "text-primary" 
                  : "text-white/80 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button 
              className="bg-primary text-black hover:bg-primary/90 font-bold"
              data-testid="button-nav-contact"
            >
              CONTACT US
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" data-testid="button-mobile-menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-white/10 pt-16">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-display font-bold transition-colors ${
                      isActive(link.href) 
                        ? "text-primary" 
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-black font-bold mt-4">
                    CONTACT US
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
