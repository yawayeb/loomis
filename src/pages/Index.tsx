
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Clock } from "lucide-react";

const testimonials = [
  {
    content: "Loomis Fruit has transformed our export business with their reliable shipping and exceptional care for our produce. Our customers now receive fruit in perfect condition.",
    author: "Emily Chen",
    role: "Export Manager",
    company: "Pacific Orchard Co.",
    avatarFallback: "EC"
  },
  {
    content: "The temperature control systems used by Loomis are unmatched in the industry. Our berries arrive fresh and ready for market, even after crossing continents.",
    author: "Michael Rodriguez",
    role: "Supply Chain Director",
    company: "Berry Farms International",
    avatarFallback: "MR"
  },
  {
    content: "Working with Loomis gives us peace of mind. Their attention to detail and commitment to quality has made them our exclusive logistics partner for all European exports.",
    author: "Sarah Johnson",
    role: "Operations Manager",
    company: "Golden State Fruits",
    avatarFallback: "SJ"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-loomis-orange/10 p-3 rounded-full">
                    <Truck className="h-8 w-8 text-loomis-orange" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-gray-700">
                  Our extensive network enables fruit delivery to over 45 countries with reliability and precision.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-loomis-green/10 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-loomis-green" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-700">
                  Advanced temperature control and careful handling ensure fruit arrives in perfect condition.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-loomis-blue/10 p-3 rounded-full">
                    <Clock className="h-8 w-8 text-loomis-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                <p className="text-gray-700">
                  Our 99.7% on-time delivery rate sets the industry standard for reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Feature Highlight */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://source.unsplash.com/random/800x600?fruits,container" 
                  alt="Temperature Controlled Transport" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-loomis-blue">
                  Temperature-Controlled Excellence
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our state-of-the-art temperature-controlled containers and vehicles maintain the perfect climate for your specific fruit varieties throughout the entire journey.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-loomis-green text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <span>Precise temperature and humidity control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-loomis-green text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <span>Real-time monitoring through IoT sensors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-loomis-green text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <span>Specialized settings for different fruit varieties</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-loomis-green text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <span>Industry-leading freshness preservation rates</span>
                  </li>
                </ul>
                <Button asChild className="bg-loomis-green hover:bg-loomis-green/90">
                  <Link to="/contact">
                    Learn About Our Technology <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-loomis-blue">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Hear from the fruit producers and distributors who trust us with their valuable cargo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  content={testimonial.content}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  avatarFallback={testimonial.avatarFallback}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-loomis-orange hover:bg-loomis-orange/90">
                <Link to="/contact">
                  Get Started With Us Today <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-loomis-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Fruit Transport Experience?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the leading producers and distributors who trust Loomis Fruit Company with their valuable cargo.
            </p>
            <Button asChild size="lg" className="bg-loomis-orange hover:bg-loomis-orange/90">
              <Link to="/contact">
                Request a Quote Today
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
