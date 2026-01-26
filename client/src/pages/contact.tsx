import { Navbar } from "@/components/ui/navbar";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/ui/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Ready to explore Darjeeling on two wheels? Contact us to book your bike or scooty. 
            We're here to help you plan the perfect mountain adventure.
          </p>
        </div>
      </section>

      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
