import { ShieldCheck, FileText, CreditCard, Clock, AlertTriangle, CheckCircle, Users, MapPin } from "lucide-react";
import { useRef } from "react";
import parallaxImage from "@/assets/images/darjeeling-parallax.jpg";

export function RentalInfo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mainRequirements = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Valid Driving License",
      description: "A valid Indian driving license with appropriate vehicle class endorsement is mandatory. The license must not be expired and should match the type of vehicle you wish to rent (LMV for bikes, MCWG for two-wheelers)."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Aadhaar Card (Original)",
      description: "Original Aadhaar Card is required for identity verification and will be kept as security during the rental period. A photocopy will be retained for our records. This is a government-mandated requirement."
    },
  ];

  const additionalInfo = [
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Security Deposit",
      description: "A refundable security deposit is required for all rentals. The amount varies based on the vehicle type. 100% refund upon safe return of the vehicle in original condition."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Rental Duration",
      description: "Flexible rental periods available - hourly, daily, or weekly. Rental day starts from 9:00 AM. Late returns beyond 1 hour may incur additional charges. Early returns are welcomed."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary" />,
      title: "Age Requirement",
      description: "Minimum age for renting is 18 years with a valid license. For premium bikes like Royal Enfield Himalayan or KTM, the rider must be at least 21 years with 2+ years of riding experience."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Fuel Policy",
      description: "Vehicles are provided with a full tank of fuel. Please return the vehicle with a full tank. Fuel consumption during the rental is the responsibility of the renter."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Pillion Rider",
      description: "Helmets are provided for both rider and pillion. It is mandatory to wear helmets as per Indian traffic laws. Additional helmets can be arranged upon request."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Area Restrictions",
      description: "Vehicles can be used within Darjeeling district. For outstation trips to Sikkim, Nepal border areas, or other locations, prior permission and additional documentation may be required."
    }
  ];

  return (
    <section id="info" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            RENTAL <span className="text-primary">REQUIREMENTS</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We keep the process simple and transparent. Please ensure you have the following documents ready for a smooth rental experience.
          </p>
        </div>

        {/* Parallax Image Section */}
        <div className="relative h-[300px] md:h-[400px] mb-16 rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={parallaxImage} 
              alt="Beautiful Darjeeling mountain landscape with tea gardens" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Explore the <span className="text-primary">Queen of Hills</span>
              </h3>
              <p className="text-white/80 max-w-xl mx-auto text-lg">
                Ride through scenic mountain roads, lush tea gardens, and breathtaking viewpoints of the Himalayas
              </p>
            </div>
          </div>
        </div>

        {/* Main Requirements - Highlighted */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
            <span className="text-primary">Mandatory</span> Documents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mainRequirements.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-2 border-primary/30 bg-primary/5"
              >
                <div className="mb-6 p-4 bg-primary/20 rounded-full border border-primary/40">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-display">{item.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-0">
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Additional <span className="text-primary">Information</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalInfo.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-full border border-primary/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">{item.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 glass-card p-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-yellow-500 mb-2 font-display">Important Notice</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                All documents are verified before vehicle handover. False or expired documents will result in cancellation of rental. 
                The renter is responsible for all traffic violations and damages during the rental period. 
                Please ride safely and follow all traffic rules. Helmets are mandatory as per law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
