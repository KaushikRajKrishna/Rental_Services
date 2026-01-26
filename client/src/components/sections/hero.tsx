import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    })
    .from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
    }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-primary/5 to-transparent blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div ref={textRef} className="max-w-2xl">
          <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              Premier Bike Rentals
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6">
            CONQUER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              DARJEELING
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-lg">
            Experience the queen of hills on two wheels. Premium fleet of bikes and scooters for your mountain adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-black hover:bg-primary/90 text-lg font-bold px-8 h-14"
              onClick={() => document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Choose Your Ride
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 text-lg font-medium px-8 h-14"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Hero Image Parallax */}
        <div ref={imageRef} className="relative hidden lg:block h-full min-h-[600px]">
          {/* Use a placeholder from Unsplash that fits the theme */}
          {/* high performance motorcycle dynamic shot */}
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop" 
            alt="Royal Enfield Himalayan" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none object-contain drop-shadow-[0_20px_50px_rgba(255,215,0,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}
