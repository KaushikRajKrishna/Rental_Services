import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Fleet } from "@/components/sections/fleet";
import { RentalInfo } from "@/components/sections/rental-info";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Fleet Preview Section */}
        <section className="py-24 bg-zinc-950/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  OUR <span className="text-primary">FLEET</span>
                </h2>
                <p className="text-zinc-400 max-w-xl text-lg">
                  Maintained to perfection. Ready for the toughest mountain roads.
                  Choose from our premium selection of two-wheeler rental Darjeeling options.
                </p>
              </div>
              <Link href="/fleet">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" data-testid="button-view-all-fleet">
                  View All Bikes <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <Fleet showTitle={false} limit={3} />
          </div>
        </section>
        
        <RentalInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
