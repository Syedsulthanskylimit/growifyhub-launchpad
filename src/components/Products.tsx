import { Heart, ShoppingCart, Clock, Users, Headphones, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const products = [
    {
      title: "Matrimonial Website Builder",
      description: "Launch your matrimonial service platform within 24 hours with our comprehensive solution.",
      icon: <Heart className="h-8 w-8" />,
      features: [
        "Complete website building from scratch",
        "Professional matrimonial platform design",
        "Free hosting and domain setup",
        "Comprehensive training for site management",
        "Business guidance and support",
        "Live deployment assistance"
      ],
      gradient: "from-pink-500 to-rose-400"
    },
    {
      title: "Online Store Builder",
      description: "Create a professional e-commerce platform and start selling online immediately.",
      icon: <ShoppingCart className="h-8 w-8" />,
      features: [
        "Full e-commerce website development",
        "Payment gateway integration",
        "Inventory management system",
        "Free hosting and SSL certificate",
        "Store management training",
        "Marketing and SEO guidance"
      ],
      gradient: "from-blue-500 to-cyan-400"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Launch",
      description: "Get your website live within 24 hours"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Professional developers and designers"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Full Support",
      description: "Training and ongoing assistance included"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Business Ready",
      description: "Complete solution for immediate operation"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
            Our Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional website builders designed to help you start your digital business quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center text-white mb-4`}>
                  {product.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
                <CardDescription className="text-lg">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient} mr-3 flex-shrink-0`}></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full mt-6 bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white`}
                >
                  Get Started Today
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-brand-gradient flex items-center justify-center text-white">
                {benefit.icon}
              </div>
              <h4 className="font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;