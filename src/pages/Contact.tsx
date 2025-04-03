
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-loomis-blue to-loomis-blue/80 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl">
                Have questions about our services or need a quote? We're here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-loomis-blue">Get in Touch</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our team of fruit transport specialists is ready to answer your questions and provide the solutions you need for your business.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-orange/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-loomis-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                      <p className="text-gray-600 text-sm">Monday - Friday, 8am - 6pm PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-green/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-loomis-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-700">info@loomisfruit.com</p>
                      <p className="text-gray-600 text-sm">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-blue/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-loomis-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                      <p className="text-gray-700">123 Orchard Street</p>
                      <p className="text-gray-700">Loomis, CA 95650</p>
                      <p className="text-gray-700">United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-yellow/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-loomis-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 8am - 6pm PST</p>
                      <p className="text-gray-700">Saturday: 9am - 2pm PST</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-loomis-red/10 p-3 rounded-full">
                      <Globe className="h-6 w-6 text-loomis-red" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Global Offices</h3>
                      <p className="text-gray-700">London • Singapore • São Paulo</p>
                      <p className="text-gray-600 text-sm">Contact headquarters for regional office details</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Emergency Shipment Support</h3>
                  <p className="text-gray-700 mb-2">
                    For urgent matters regarding active shipments, please call our 24/7 support line:
                  </p>
                  <p className="text-loomis-blue font-bold">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-loomis-blue">Request a Quote</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Fill out the form below and our team will provide you with a customized quote for your fruit transport needs.
                </p>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-loomis-blue">Our Location</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Visit our headquarters in Loomis, California or connect with one of our global offices.
              </p>
            </div>
            
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
              {/* Replace with actual map or iframe */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500 text-lg">Map of Loomis, California Headquarters</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-loomis-blue">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find quick answers to common questions about our services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-loomis-blue">How quickly can you arrange international fruit shipping?</h3>
                <p className="text-gray-700">
                  We typically arrange standard international shipments within 3-5 business days. For expedited services, we can often accommodate shipments within 24-48 hours depending on the destination.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-loomis-blue">What temperature control options are available?</h3>
                <p className="text-gray-700">
                  We offer fully customizable temperature control for all fruit varieties, with precision to ±0.5°C. Our systems include real-time monitoring and automatic adjustments to maintain optimal conditions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-loomis-blue">Do you provide tracking for shipments?</h3>
                <p className="text-gray-700">
                  Yes, all shipments include real-time tracking accessible through our online portal. You'll receive updates at key transport milestones and can monitor location, temperature, and estimated arrival times.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-loomis-blue">What insurance options do you offer?</h3>
                <p className="text-gray-700">
                  We provide comprehensive cargo insurance options customized to your specific fruit type and value. Our standard package covers damage and delays, while premium packages include additional protections.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
