import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "GrowifyHub - Professional Website Builder & Digital Solutions";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional matrimonial website builder and e-commerce solutions. Launch your digital business in 24 hours with complete training and support. Web development, hosting, and digital marketing services.');
    }
    
    // Add additional SEO meta tags
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (!existingKeywords) {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = 'matrimonial website builder, e-commerce website, online store builder, web development, digital marketing, hosting services, website training';
      document.head.appendChild(keywordsMeta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
