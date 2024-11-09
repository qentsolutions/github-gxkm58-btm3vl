"use client";

import React from "react";
import Image from "next/image";
import WobbleCard from "./wobble-card";
import { motion } from "framer-motion";

const FeatureDesign = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unmatched Productivity
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A project, time, and knowledge management platform that provides amazing collaboration!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feature Card */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-600 min-h-[400px] lg:min-h-[500px] relative overflow-hidden">
            <div className="relative z-10 max-w-sm">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Insightful Lead Tracking
              </h3>
              <p className="text-gray-100 text-base sm:text-lg">
                Watch your leads turn into customers through our delightful and intuitive interface. Track every interaction and make data-driven decisions.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-full lg:w-2/3 h-64 sm:h-80 lg:h-full transform translate-x-1/4 translate-y-1/4 lg:translate-y-0">
              <Image
                src="/hero-img.png"
                alt="Lead tracking dashboard interface"
                width={800}
                height={600}
                className="object-contain filter brightness-105"
              />
            </div>
          </WobbleCard>

          {/* Secondary Feature Card */}
          <WobbleCard containerClassName="bg-gradient-to-br from-indigo-600 to-purple-600 min-h-[400px] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Streamline Workflows
              </h3>
              <p className="text-gray-100 text-base sm:text-lg">
                Keep the pulse on every project with our One-Click Update feature and automated workflows.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          </WobbleCard>

          {/* Full Width Feature Card */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-blue-800 to-indigo-900 min-h-[400px] lg:min-h-[300px] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              <div className="relative z-10 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  AI-Powered Efficiency
                </h3>
                <p className="text-gray-100 text-base sm:text-lg">
                  Free up valuable time with AI-powered task management. Our platform automates routine tasks so you can focus on what matters most - growing your business and building meaningful customer relationships.
                </p>
              </div>
              <div className="relative h-full hidden lg:block">
                <Image
                  src="/hero-img.png"
                  alt="AI-powered dashboard visualization"
                  width={600}
                  height={400}
                  className="object-contain absolute right-0 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};

export default FeatureDesign;