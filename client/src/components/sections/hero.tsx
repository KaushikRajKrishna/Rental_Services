import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "wouter";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
    title: "Tiger Hill Sunrise",
    subtitle: "Witness the magical sunrise over Kanchenjunga"
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    title: "Batasia Loop",
    subtitle: "Experience the iconic railway loop with mountain views"
  },
  {
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=1200&auto=format&fit=crop",
    title: "Tea Gardens",
    subtitle: "Ride through the lush green tea plantations"
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    title: "Mountain Roads",
    subtitle: "Conquer the winding roads of the Himalayas"
  },
  {
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop",
    title: "Chowrasta Mall",
    subtitle: "Start your adventure from the heart of Darjeeling"
  }
];

export function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });
  }, { scope: containerRef });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-primary hover:text-black transition-all"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-primary hover:text-black transition-all"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/40"
            }`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>

      {/* Current Location Badge */}
      <div className="absolute top-28 right-8 z-20 hidden lg:block">
        <div className="glass-card px-4 py-2 rounded-full">
          <span className="text-primary font-bold text-sm">{heroSlides[currentSlide].title}</span>
          <p className="text-zinc-400 text-xs">{heroSlides[currentSlide].subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Text Content */}
        <div ref={textRef} className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              Best Bike Rental Service in Darjeeling
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6">
            BIKE RENTAL IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              DARJEELING
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed max-w-xl">
            Explore the queen of hills on two wheels. Scooty on rent in Darjeeling and premium two-wheeler rental services for your mountain adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-primary text-black hover:bg-primary/90 text-lg font-bold px-8 h-14"
                data-testid="button-hero-contact"
              >
                Contact Us to Book
              </Button>
            </Link>
            <Link href="/fleet">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 text-lg font-medium px-8 h-14"
                data-testid="button-view-fleet"
              >
                View Our Fleet <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
