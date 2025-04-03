
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHistory from "@/components/AboutHistory";
import TeamSection from "@/components/TeamSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, Users, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-loomis-blue to-loomis-blue/80 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Loomis Fruit Company</h1>
              <p className="text-xl mb-8">
                A global leader in fruit logistics, connecting orchards to markets worldwide with expertise and precision.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-loomis-blue">
                  Our Mission & Vision
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Loomis Fruit Company, we're dedicated to revolutionizing global fruit transport by combining cutting-edge technology with decades of expertise to ensure fruit arrives at its destination in perfect condition.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  We envision a world where distance is no longer a barrier to enjoying fresh, quality fruit. By connecting growers to global markets with reliable, efficient transport solutions, we help businesses thrive while delivering freshness to consumers worldwide.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-orange/10 p-3 rounded-full">
                      <Award className="h-6 w-6 text-loomis-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Excellence</h3>
                      <p className="text-gray-700">Committed to the highest standards in every aspect.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-green/10 p-3 rounded-full">
                      <Globe className="h-6 w-6 text-loomis-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Global Perspective</h3>
                      <p className="text-gray-700">Understanding local needs in a global context.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-blue/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-loomis-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Partnership</h3>
                      <p className="text-gray-700">Building lasting relationships with our clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-yellow/10 p-3 rounded-full">
                      <Leaf className="h-6 w-6 text-loomis-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                      <p className="text-gray-700">Committed to environmentally responsible practices.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://source.unsplash.com/random/800x600?fruit,global" 
                  alt="Global Fruit Network" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* History Timeline */}
        <AboutHistory />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-loomis-blue">
                Loomis By The Numbers
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our growing impact on the global fruit transport industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-loomis-orange mb-2">15+</div>
                <p className="text-lg font-medium text-gray-700">Years in Business</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-loomis-orange mb-2">45+</div>
                <p className="text-lg font-medium text-gray-700">Countries Served</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-loomis-orange mb-2">500K+</div>
                <p className="text-lg font-medium text-gray-700">Tons Shipped Annually</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-loomis-orange mb-2">99.7%</div>
                <p className="text-lg font-medium text-gray-700">On-time Delivery</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-loomis-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner With The Best in Fruit Transport
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the Loomis difference for your fruit shipping needs.
            </p>
            <Button asChild size="lg" className="bg-loomis-orange hover:bg-loomis-orange/90">
              <Link to="/contact">
                Contact Our Team <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
