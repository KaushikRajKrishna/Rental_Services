import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useBikes } from "@/hooks/use-bikes";
import { BikeCard } from "@/components/ui/bike-card";
import { Loader2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FleetProps {
  showTitle?: boolean;
  limit?: number;
}

export function Fleet({ showTitle = true, limit }: FleetProps) {
  const containerRef = useRef(null);
  const { data: bikes, isLoading } = useBikes();

  useGSAP(() => {
    if (!bikes || bikes.length === 0) return;
    
    gsap.from(".bike-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef, dependencies: [bikes] });

  const displayedBikes = limit && bikes ? bikes.slice(0, limit) : bikes;

  return (
    <section id="fleet" ref={containerRef} className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-4 md:px-6">
        {showTitle && (
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
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBikes?.map((bike) => (
              <div key={bike.id} className="bike-card h-full">
                <BikeCard bike={bike} />
              </div>
            ))}
            
            {displayedBikes?.length === 0 && (
              <div className="col-span-full text-center py-12 text-zinc-500">
                No bikes available at the moment. Please check back later.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
