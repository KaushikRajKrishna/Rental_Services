import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useBikes } from "@/hooks/use-bikes";
import { BikeCard } from "@/components/ui/bike-card";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Bike } from "@shared/schema";
import { Loader2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Fleet() {
  const containerRef = useRef(null);
  const { data: bikes, isLoading } = useBikes();
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const handleBook = (bike: Bike) => {
    setSelectedBike(bike);
    setIsDialogOpen(true);
  };

  return (
    <section id="fleet" ref={containerRef} className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              OUR <span className="text-primary">FLEET</span>
            </h2>
            <p className="text-zinc-400 max-w-xl text-lg">
              Maintained to perfection. Ready for the toughest mountain roads.
              Choose from our premium selection of cruisers and scooters.
            </p>
          </div>
          {/* Optional Filter Buttons could go here */}
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikes?.map((bike) => (
              <div key={bike.id} className="bike-card h-full">
                <BikeCard bike={bike} onBook={handleBook} />
              </div>
            ))}
            
            {/* Fallback if no bikes in DB yet, show generic skeletons or message */}
            {bikes?.length === 0 && (
              <div className="col-span-full text-center py-12 text-zinc-500">
                No bikes available at the moment. Please check back later.
              </div>
            )}
          </div>
        )}
      </div>

      <BookingDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        selectedBike={selectedBike}
      />
    </section>
  );
}
