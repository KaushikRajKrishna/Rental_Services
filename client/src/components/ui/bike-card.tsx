import { Bike } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gauge, Fuel } from "lucide-react";

interface BikeCardProps {
  bike: Bike;
  onBook: (bike: Bike) => void;
}

export function BikeCard({ bike, onBook }: BikeCardProps) {
  return (
    <div className="group relative h-full glass-card rounded-2xl overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <Badge 
          className="absolute top-4 right-4 z-20 bg-primary text-black font-bold border-none"
        >
          ₹{bike.price}/day
        </Badge>
        {/* Type Badge */}
        <Badge 
          variant="outline"
          className="absolute top-4 left-4 z-20 border-white/20 text-white bg-black/40 backdrop-blur-md uppercase tracking-wider text-xs"
        >
          {bike.type}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between relative z-20">
        <div>
          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {bike.name}
          </h3>
          <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
            {bike.description}
          </p>

          {/* Specs Mini-Grid (Mocked for visual depth) */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="flex items-center gap-2 text-xs text-zinc-500 bg-white/5 p-2 rounded">
              <Gauge className="w-3.5 h-3.5 text-primary" />
              <span>Manual</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 bg-white/5 p-2 rounded">
              <Fuel className="w-3.5 h-3.5 text-primary" />
              <span>Petrol</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={() => onBook(bike)}
          className="w-full bg-white/10 hover:bg-primary hover:text-black text-white border border-white/10 transition-all duration-300 font-bold"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
