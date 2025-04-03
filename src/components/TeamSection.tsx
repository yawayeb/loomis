
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "John Loomis",
    position: "CEO & Founder",
    bio: "With 25+ years in global logistics, John founded Loomis Fruit to revolutionize fruit transport worldwide.",
    image: "https://source.unsplash.com/random/400x400?executive,man,1"
  },
  {
    name: "Maria Rodriguez",
    position: "Operations Director",
    bio: "Maria ensures our complex global operations run smoothly, maintaining our high standards of service.",
    image: "https://source.unsplash.com/random/400x400?executive,woman,1"
  },
  {
    name: "David Chen",
    position: "International Relations",
    bio: "David manages our global partnerships, opening new markets and strengthening existing relationships.",
    image: "https://source.unsplash.com/random/400x400?executive,man,2"
  },
  {
    name: "Sarah Johnson",
    position: "Quality Assurance Manager",
    bio: "Sarah's expertise in fruit preservation ensures optimal quality throughout the transport process.",
    image: "https://source.unsplash.com/random/400x400?executive,woman,2"
  }
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-loomis-blue">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our expert team combines decades of experience in global logistics, 
            fruit industry knowledge, and innovative thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-60 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-xl text-loomis-blue">{member.name}</h3>
                <p className="text-loomis-orange font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
