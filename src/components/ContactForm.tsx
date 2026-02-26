"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      alert("¡Mensaje recibido! Nos comunicaremos con su empresa a la brevedad.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const inputStyle = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#003d7a] focus:bg-white focus:border-transparent transition-all outline-none text-gray-700";

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003d7a] mb-2 ml-1">Nombre Completo *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputStyle}
              placeholder="Ej: Juan Pérez"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003d7a] mb-2 ml-1">Email Corporativo *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputStyle}
              placeholder="juan@empresa.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003d7a] mb-2 ml-1">Teléfono de contacto *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputStyle}
              placeholder="+54 9..."
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003d7a] mb-2 ml-1">Empresa / Organización</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={inputStyle}
              placeholder="Nombre de su empresa"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#003d7a] mb-2 ml-1">¿En qué podemos ayudarlo? *</label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputStyle} resize-none`}
            placeholder="Describa brevemente su requerimiento..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-gradient py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-900/20"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </span>
          ) : "Enviar Solicitud"}
        </button>
      </form>
    </div>
  );
}