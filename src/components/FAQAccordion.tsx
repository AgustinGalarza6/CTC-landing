"use client";

import { useState } from "react";

// Client component for accordion functionality
export function FAQAccordion({ faqs }: { faqs: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq: any, index: number) => (
        <div 
          key={index} 
          className="border-2 border-gray-200 rounded-lg transition-all duration-300 bg-white hover:shadow-md"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-6 text-left flex justify-between items-center font-medium text-gray-900 transition-colors duration-200"
          >
            <span className="text-lg">{faq.question}</span>
            <svg
              className={`w-6 h-6 ml-4 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              style={{ color: '#003d7a' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 pt-2">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
