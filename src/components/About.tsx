import { Target, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission Driven",
      description: "Empowering businesses with innovative digital solutions that drive real growth and success."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Focused",
      description: "We prioritize our clients' success with personalized service and ongoing support."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Delivering high-quality solutions with attention to detail and professional excellence."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "Staying ahead with the latest technologies and creative approaches to solve business challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
              About GrowifyHub
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted digital partner for comprehensive business growth solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Transforming Ideas into Digital Success
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At GrowifyHub, we specialize in helping businesses establish and grow their online presence. 
                From matrimonial platforms to e-commerce stores, we provide end-to-end digital solutions 
                that include website development, hosting, training, and ongoing support.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive approach ensures that you not only get a professional website but also 
                the knowledge and support needed to manage and grow your digital business successfully.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">24hrs</div>
                  <div className="text-sm text-muted-foreground">Average Launch Time</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand-gradient flex items-center justify-center">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Innovation & Excellence</h4>
                  <p className="text-muted-foreground">Delivering cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h4 className="font-bold mb-3 text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose GrowifyHub?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                We don't just build websites - we build partnerships. Our commitment to your success extends beyond 
                project delivery with comprehensive training, ongoing support, and business guidance to help you thrive 
                in the digital marketplace.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">✓ Complete Training Included</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">✓ 24/7 Support Available</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">✓ Business Growth Guidance</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">✓ Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;