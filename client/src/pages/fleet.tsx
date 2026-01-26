import { Navbar } from "@/components/ui/navbar";
import { Fleet } from "@/components/sections/fleet";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone } from "lucide-react";

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            OUR <span className="text-primary">FLEET</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg mb-8">
            Explore our premium collection of bikes and scooties available for rent in Darjeeling. 
            All vehicles are regularly serviced and maintained to ensure your safety and comfort.
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold" data-testid="button-fleet-contact">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us to Book
            </Button>
          </Link>
        </div>
      </section>

      <main>
        <Fleet showTitle={false} />
      </main>
      <Footer />
    </div>
  );
}
