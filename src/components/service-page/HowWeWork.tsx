import React from "react";
import { ServicePageData } from "@/data/servicesData";

interface HowWeWorkProps {
  data: ServicePageData["howWeWork"];
}

export default function HowWeWork({ data }: HowWeWorkProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ctc-navy mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600">{data.description}</p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 group"
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-ctc-navy to-ctc-blue text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-1">
                  <h3 className="text-xl font-bold text-ctc-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
