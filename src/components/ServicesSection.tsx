
import React from "react";
import { Truck, Thermometer, Clock, Globe, Shield, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Global Shipping Network",
    description: "Access to international markets with our extensive shipping network covering 6 continents.",
    icon: Globe,
    color: "bg-loomis-blue",
  },
  {
    title: "Temperature Control",
    description: "State-of-the-art temperature-controlled transport ensuring fruit quality and freshness.",
    icon: Thermometer,
    color: "bg-loomis-green",
  },
  {
    title: "Express Delivery",
    description: "Expedited shipping options for time-sensitive fruit cargo with full tracking capability.",
    icon: Clock,
    color: "bg-loomis-orange",
  },
  {
    title: "Custom Logistics",
    description: "Tailored transport solutions designed to meet your specific business requirements.",
    icon: Truck,
    color: "bg-loomis-yellow",
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive quality checks throughout the entire transport journey.",
    icon: Shield,
    color: "bg-loomis-red",
  },
  {
    title: "Market Analytics",
    description: "Data-driven insights to optimize your fruit export and import strategies.",
    icon: BarChart,
    color: "bg-loomis-blue",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-loomis-blue">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From orchard to market, our expert services ensure your fruit arrives in
            pristine condition, on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
