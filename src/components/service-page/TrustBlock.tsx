import React from "react";
import { ServicePageData } from "@/data/servicesData";

interface TrustBlockProps {
  data: ServicePageData["trust"];
}

export default function TrustBlock({ data }: TrustBlockProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-ctc-navy mb-10 text-center">
            {data.title}
          </h2>

          {/* Statements */}
          <div className="space-y-4">
            {data.statements.map((statement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-ctc-blue/30 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-ctc-blue flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed">{statement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
