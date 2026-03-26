"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({ faqs }: { faqs: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-[#003d7a]">{faq.question}</span>
            <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }}>
              <ChevronDown className="w-5 h-5" aria-hidden="true" />
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-5 pt-0 text-gray-600 text-sm border-t border-gray-100">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}