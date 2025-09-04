import { Code, Smartphone, Server, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: <Code className="h-8 w-8" />,
      features: [
        "Responsive design for all devices",
        "Modern frameworks and technologies",
        "SEO-optimized development",
        "Fast loading and secure websites"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications to help your business reach customers on all devices.",
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "User-friendly interfaces",
        "App store deployment assistance"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Hosting Services",
      description: "Reliable and secure hosting solutions with 99.9% uptime guarantee and 24/7 technical support.",
      icon: <Server className="h-8 w-8" />,
      features: [
        "99.9% uptime guarantee",
        "Free SSL certificates",
        "Daily backups included",
        "24/7 technical support"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        "Search Engine Optimization (SEO)",
        "Social media marketing",
        "Pay-per-click advertising",
        "Analytics and reporting"
      ],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-brand-gradient hover:opacity-90 text-white px-8 py-3"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;