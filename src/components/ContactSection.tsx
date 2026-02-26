"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    consultType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", consultType: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const channels = [
    { label: "Email", value: "info@ctcsistemas.com.ar", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { label: "Teléfono", value: "+54 9 11 3892-3268", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
    { label: "Horario", value: "Lunes a viernes · 9 a 18 hs", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Ubicación", value: "Av. Regimientos de Patricios 176", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
  ];

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-6" style={{ color: '#003d7a' }}>
              Hablar con <br /> <span className="font-bold">un asesor</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Un asesor de nuestro equipo se pondrá en contacto para analizar su requerimiento técnico de manera personalizada.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="space-y-5">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#003d7a' }}>Canales de atención</h3>
              {channels.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 group hover:bg-[#003d7a] transition-all duration-300 shadow-sm">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-[#003d7a] group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d={item.icon} /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-100 transition-colors">{item.label}</p>
                    <p className="text-base font-bold text-[#003d7a] group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="form-label">Nombre completo *</label><input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Martín González" className="form-input" /></div>
                <div><label className="form-label">Email corporativo *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="martin@empresa.com" className="form-input" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="form-label">Teléfono</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+54 9 11..." className="form-input" /></div>
                <div><label className="form-label">Empresa</label><input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Empresa S.A." className="form-input" /></div>
              </div>
              <div>
                <label className="form-label">Tipo de consulta *</label>
                <select name="consultType" required value={formData.consultType} onChange={handleChange} className="form-input">
                  <option value="">Seleccione una opción</option>
                  <option value="infraestructura-it">Infraestructura IT</option>
                  <option value="erp">ERP / Software de Gestión</option>
                  <option value="soporte-tecnico">Soporte Técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div><label className="form-label">Mensaje *</label><textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Describa brevemente su requerimiento..." className="form-input form-textarea" /></div>

              {submitStatus === "success" && <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl text-sm font-medium animate-fade-in">Mensaje enviado correctamente. Nos contactaremos pronto.</div>}

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50">
                {isSubmitting ? "Enviando..." : "Solicitar contacto"}
              </button>

              <div className="pt-5 border-t border-gray-100">
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-tight text-gray-400">
                  <li className="flex items-center gap-2"><div className="dot"></div> Atención profesional</li>
                  <li className="flex items-center gap-2"><div className="dot"></div> Asesoramiento especializado</li>
                  <li className="flex items-center gap-2"><div className="dot"></div> Soluciones pensadas para su operación</li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}