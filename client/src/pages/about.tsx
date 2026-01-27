import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, MapPin, Award, Heart, Bike, Users } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import surajImage from "@/assets/images/suraj-gupta.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "5+ Years Experience",
      description: "Serving tourists and locals since 2019"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "1000+ Happy Customers",
      description: "Trusted by riders from across India"
    },
    {
      icon: <Bike className="w-6 h-6 text-primary" />,
      title: "Well-Maintained Fleet",
      description: "Regular servicing and safety checks"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Passion for Riding",
      description: "Born from love for motorcycles"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <main ref={containerRef}>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                MEET <span className="text-primary">SURAJ GUPTA</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                The founder and heart behind Suraj Bike and Scooty Rental Darjeeling
              </p>
            </div>
          </div>
        </section>

        {/* About Suraj Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="about-item relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-xl" />
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/30">
                    <img 
                      src={surajImage} 
                      alt="Suraj Gupta - Founder of Suraj Bike and Scooty Rental" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-black px-6 py-3 rounded-xl font-bold font-display">
                    Founder & Owner
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="about-item space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  A Local's <span className="text-primary">Passion</span> for Adventure
                </h2>
                
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    Born and raised in the beautiful hills of Darjeeling, Suraj Gupta has always had a deep love for motorcycles and the open road. Growing up surrounded by the majestic Himalayas, he understood the unique joy of exploring mountain roads on two wheels.
                  </p>
                  <p>
                    In 2019, Suraj turned his passion into a mission - to help visitors experience Darjeeling the way locals do. He started Suraj Bike and Scooty Rental with just two bikes and a dream. Today, the rental service has grown into one of the most trusted names for two-wheeler rentals in the region.
                  </p>
                  <p>
                    What sets Suraj apart is his personal touch. He personally ensures every vehicle is well-maintained, provides local riding tips, and shares hidden gems that only a true Darjeeling native would know. For Suraj, it's not just about renting bikes - it's about creating unforgettable memories for every rider.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="tel:+919064984225">
                    <Button className="bg-primary text-black hover:bg-primary/90 font-bold w-full sm:w-auto" data-testid="button-call-suraj">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Suraj
                    </Button>
                  </a>
                  <a href="https://wa.me/919064984225" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 w-full sm:w-auto" data-testid="button-whatsapp-suraj">
                      <SiWhatsapp className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-zinc-950/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="about-item glass-card p-6 rounded-2xl text-center"
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-full border border-primary/20 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center about-item">
              <div className="inline-flex p-4 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Find Us in <span className="text-primary">Darjeeling</span>
              </h2>
              <p className="text-zinc-300 text-lg mb-6">
                Located near Pushpak Hotel on the iconic Chowrasta Mall Road, right in the heart of Darjeeling. 
                Easy to find and convenient for all major tourist spots.
              </p>
              <p className="text-zinc-400 mb-8">
                Near Pushpak Hotel, Chowrasta Mall Road, Darjeeling - 734101, West Bengal, India
              </p>
              <Link href="/contact">
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold" data-testid="button-get-directions">
                  Get Directions
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
