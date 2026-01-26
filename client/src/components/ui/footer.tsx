import { Bike } from "lucide-react";
import { Link } from "wouter";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bike className="w-6 h-6 text-primary" />
              <span className="text-xl font-display font-bold text-white">
                SURAJ<span className="text-primary">BIKES</span>
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6">
              The premier bike rental service in Darjeeling. Your trusted partner for two-wheeler rental in Darjeeling. 
              Explore the queen of hills with our well-maintained bikes and scooties. 
              Best bike rental service in Darjeeling for tourists and locals alike.
            </p>
            <p className="text-zinc-600 text-sm">
              <strong className="text-zinc-400">Address:</strong> Near Pushpak Hotel, Chowrasta Mall Road, Darjeeling, West Bengal 734101
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 text-zinc-500">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/fleet" className="hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/rental-info" className="hover:text-primary transition-colors">Rental Requirements</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800 rounded-full text-white hover:bg-primary hover:text-black transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800 rounded-full text-white hover:bg-primary hover:text-black transition-colors"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919064984225" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800 rounded-full text-white hover:bg-primary hover:text-black transition-colors"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
            <p className="text-zinc-500 text-sm">
              <strong className="text-zinc-400">Phone:</strong> +91 90649 84225
            </p>
            <p className="text-zinc-500 text-sm">
              <strong className="text-zinc-400">Email:</strong> surajgupta06101998@gmail.com
            </p>
          </div>
        </div>

        {/* SEO Text */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <p className="text-zinc-600 text-sm leading-relaxed">
            Looking for <strong className="text-zinc-500">bike rental in Darjeeling</strong>? Suraj Bike and Scooty Rental offers the best 
            <strong className="text-zinc-500"> scooty on rent in Darjeeling</strong> and premium <strong className="text-zinc-500">two-wheeler rental Darjeeling</strong> services. 
            Whether you're a tourist exploring Tiger Hill, Batasia Loop, or the famous tea gardens, or a local needing reliable transportation, 
            we provide well-maintained Royal Enfield, KTM, TVS, and Bajaj vehicles. As the <strong className="text-zinc-500">best bike rental service in Darjeeling</strong>, 
            we ensure safety, comfort, and memorable mountain adventures.
          </p>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <p>Suraj Bike and Scooty Rental Darjeeling. All rights reserved.</p>
          <p>Near Pushpak Hotel, Chowrasta Mall Road, Darjeeling 734101</p>
        </div>
      </div>
    </footer>
  );
}
