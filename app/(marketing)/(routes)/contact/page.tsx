"use client";

import { useState } from "react";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { ContactForm } from "./components/contact-form";
import { ScheduleMeeting } from "./components/schedule-meeting";
import { ContactInfoCard } from "./components/contact-info-card";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 000-0000",
    description: "Monday to Friday from 9am to 5pm"
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@qentsolutions.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Office",
    value: "123 Business Avenue",
    description: "Paris, France 75000"
  }
];

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (formData: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormSubmitted(true);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (e) {
      toast.error(`Failed to send message. ${e}`);
    }
  };

  if (formSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for reaching out. We'll get back to you shortly.
          </p>
          <button 
            onClick={() => setFormSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Send Another Message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Have a question or want to learn more? We'd love to hear from you.
              Our team is here to help.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={info.title} {...info} index={index} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm onSubmit={handleSubmit} />
          <ScheduleMeeting />
        </div>
      </div>

      <div className="h-96 w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410694685!2d2.2646349749545983!3d48.85893843540037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1708786391411!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
}