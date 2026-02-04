import { Button } from "@/components/ui/button";
import PillarOverlays from "./PillarOverlays";


const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen pt-48 pb-16 flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        {/* GCC Badge */}
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          <img
            src="/gcc-full-logo.png"
            alt="GCC - Trusted Build and Operational Partner"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          SNS Square<br />
          GCC Build and Operation Specialist
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Harness the combined power of integrated data and Agentic AI to build a intelligent, future-proof operational hub.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="rounded-lg px-8 py-6 text-base font-bold bg-primary text-black hover:bg-primary/90">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="rounded-lg px-8 py-6 text-base font-bold text-black border-black">
            Contact US
          </Button>
        </div>

        {/* GCC Pillars Image with Overlays */}
        <div className="animate-fade-in max-w-4xl mx-auto relative group" style={{ animationDelay: "0.4s" }}>
          <img
            src="/gcc-pillars.png"
            alt="GCC Build, Operate, Transfer Pillars"
            className="w-full h-auto object-contain"
          />
          <PillarOverlays />
        </div>
      </div>
    </section>
  );
};

export default Hero;
