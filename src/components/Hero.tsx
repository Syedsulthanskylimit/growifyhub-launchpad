import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-brand-gradient text-white rounded-full text-sm font-medium mb-6">
              Your Digital Partner for Growth
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
              Transform Your Business with
              <br />
              Professional Digital Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From matrimonial platforms to e-commerce stores, we provide complete digital solutions 
              with website building, hosting, training, and ongoing support to help your business thrive online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-brand-gradient hover:opacity-90 text-white px-8 py-3"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="px-8 py-3 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get Free Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
              <span className="text-foreground font-medium">Complete Website Solutions</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
              <span className="text-foreground font-medium">Free Hosting & Training</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
              <span className="text-foreground font-medium">Launch Within 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;