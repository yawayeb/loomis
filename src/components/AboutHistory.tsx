
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Loomis Fruit Company was established with a mission to revolutionize fruit transport globally.",
  },
  {
    year: "2012",
    title: "International Expansion",
    description: "Expanded operations to Europe and Asia, establishing key logistics hubs in strategic locations.",
  },
  {
    year: "2015",
    title: "Temperature Control Innovation",
    description: "Pioneered new temperature-controlled shipping technology, setting industry standards.",
  },
  {
    year: "2018",
    title: "Sustainability Initiative",
    description: "Launched our comprehensive sustainability program to reduce carbon footprint across operations.",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Implemented advanced tracking systems and logistics software for enhanced efficiency.",
  },
  {
    year: "2023",
    title: "Industry Leadership Award",
    description: "Recognized as the leading fruit transport company with multiple industry accolades.",
  },
];

const achievements = [
  "Transport 500,000+ tons of fresh fruit annually",
  "99.7% on-time delivery rate",
  "Serving 45+ countries across 6 continents",
  "ISO 9001 and HACCP certified operations",
  "Zero fruit quality compromise philosophy",
  "Sustainable logistics practices"
];

const AboutHistory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-loomis-blue">
              Our Journey to Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Since our founding, Loomis Fruit Company has been dedicated to perfecting the art and science of global fruit transport. Our history is marked by continuous innovation, unwavering commitment to quality, and building lasting relationships with growers and distributors worldwide.
            </p>
            
            <div className="space-y-6 mb-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-loomis-orange text-white flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-loomis-blue">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="shadow-lg overflow-hidden h-full">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://source.unsplash.com/random/800x600?fruit,shipping" 
                  alt="Fruit Transport History" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-loomis-green">Our Achievements</h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-loomis-green flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
