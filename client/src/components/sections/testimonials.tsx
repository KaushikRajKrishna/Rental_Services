import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sonu Gupta",
    rating: 5,
    text: "Excellent service! The bike was in great condition and the process was very smooth. Best bike rental in Darjeeling.",
  },
  {
    name: "Anish Prasad",
    rating: 5,
    text: "Rented a scooty for 3 days. Very reliable and the owner is very helpful. Highly recommended for anyone visiting Darjeeling.",
  },
  {
    name: "Rahul",
    rating: 5,
    text: "Great experience with Suraj Bike Rental. The Himalayan was perfect for the mountain roads. 10/10 experience.",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-zinc-950/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            WHAT OUR <span className="text-primary">CUSTOMERS SAY</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Don't just take our word for it. Here's what our happy riders have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card bg-zinc-900/50 border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="pt-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="text-white font-bold font-display">{testimonial.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
