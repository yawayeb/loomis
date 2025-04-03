
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-gray-100 hero-pattern">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-loomis-blue leading-tight">
              Global Fruit Transport <span className="text-loomis-orange">Expertise</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl mx-auto lg:mx-0">
              Leading the industry in reliable, temperature-controlled fruit transport to markets worldwide. Ensuring freshness from orchard to table.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-loomis-orange hover:bg-loomis-orange/90 text-white">
                <Link to="/contact">
                  Get a Quote <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-loomis-blue text-loomis-blue hover:bg-loomis-blue/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <img
              src="https://source.unsplash.com/random/800x600?fruits,transport"
              alt="Fruit Transport"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-loomis-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                  15+
                </div>
                <div>
                  <p className="font-bold text-loomis-blue">Years of Excellence</p>
                  <p className="text-sm text-gray-600">In Global Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
