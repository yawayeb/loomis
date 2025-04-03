
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  avatarFallback: string;
}

const TestimonialCard = ({
  content,
  author,
  role,
  company,
  avatarUrl,
  avatarFallback,
}: TestimonialProps) => {
  return (
    <Card className="border-none shadow-md bg-white h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={author} />
            <AvatarFallback className="bg-loomis-orange text-white">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-600">{role}, {company}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-gray-700 italic">
          <span className="text-loomis-orange text-4xl leading-none">"</span>
          {content}
          <span className="text-loomis-orange text-4xl leading-none">"</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
