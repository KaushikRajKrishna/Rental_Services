import { Bike } from "lucide-react";

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
            <p className="text-zinc-500 max-w-sm">
              The premier bike rental service in Darjeeling. Explore the mountains with freedom, safety, and style.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 text-zinc-500">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">Our Fleet</a></li>
              <li><a href="#info" className="hover:text-primary transition-colors">Rental Requirements</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">Legal</h4>
            <ul className="space-y-2 text-zinc-500">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Suraj Bike Rentals. All rights reserved.</p>
          <p>Designed with ❤️ for Darjeeling</p>
        </div>
      </div>
    </footer>
  );
}
