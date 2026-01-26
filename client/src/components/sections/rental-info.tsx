import { ShieldCheck, FileText, CreditCard, Clock } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function RentalInfo() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".info-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  const items = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Documents Required",
      description: "Valid Driving License and Original Aadhaar Card / Voter ID are mandatory for verification."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Security Deposit",
      description: "A refundable security deposit is required for all rentals. 100% refunded upon safe return."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Rental Duration",
      description: "Flexible rental periods available. Day starts from 9:00 AM. Late returns may incur extra charges."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Easy Payment",
      description: "We accept UPI, Cash, and major Credit/Debit cards. Pay securely at the counter."
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
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We keep the paperwork simple so you can spend more time on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="info-item glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors"
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-full border border-primary/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
