import React from "react";
import { ServicePageData } from "@/data/servicesData";

interface ProblemStatementProps {
  data: ServicePageData["problemStatement"];
}

export default function ProblemStatement({ data }: ProblemStatementProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-ctc-navy mb-10 text-center">
            {data.title}
          </h2>

          {/* Problems List */}
          <div className="space-y-4 mb-8">
            {data.problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p className="text-gray-700 text-lg">{problem}</p>
              </div>
            ))}
          </div>

          {/* Closing Text */}
          <p className="text-xl text-ctc-navy font-semibold text-center mt-10 leading-relaxed">
            {data.closingText}
          </p>
        </div>
      </div>
    </section>
  );
}
