import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 overflow-hidden rounded-3xl glass-card border-none">
          {/* Contact Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-zinc-900/50">
            <h2 className="text-4xl font-display font-bold text-white mb-8">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Us</h4>
                  <p className="text-zinc-400">
                    Near Pushpak Hotel, Chowrasta Mall Road,<br />
                    Darjeeling, West Bengal 734101
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <a href="tel:+919064984225" className="text-zinc-400 hover:text-primary transition-colors block">
                    +91 90649 84225
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a href="mailto:surajgupta06101998@gmail.com" className="text-zinc-400 hover:text-primary transition-colors block">
                    surajgupta06101998@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-bold mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-zinc-800 rounded-full text-white hover:bg-primary hover:text-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-zinc-800 rounded-full text-white hover:bg-primary hover:text-black transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8">
               <Button 
                onClick={() => setIsDialogOpen(true)}
                className="w-full bg-primary text-black font-bold hover:bg-primary/90"
               >
                 Send a Message
               </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto w-full bg-zinc-800 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.689676756209!2d88.2626!3d27.0396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42e4a1a3a3a3a%3A0x1a1a1a1a1a1a1a1a!2sChowrasta%20Mall%20Road%2C%20Darjeeling!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
      <BookingDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        selectedBike={null} 
      />
    </section>
  );
}
