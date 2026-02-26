import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section id="contacto" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* LADO IZQUIERDO: Información de Marca */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal leading-tight mb-6" style={{ color: '#003d7a' }}>
                Llevemos su tecnología <br />
                <span className="font-bold">al siguiente nivel</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Estamos listos para asesorarlo en la implementación de soluciones IT a medida. 
                Deje sus datos y un especialista se contactará con usted.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#003d7a] group-hover:bg-[#003d7a] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Llámanos</p>
                  <p className="text-xl font-medium text-[#003d7a]">+54 9 11 XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#003d7a] group-hover:bg-[#003d7a] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="text-xl font-medium text-[#003d7a]">info@ctcsistemas.com.ar</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: El Formulario */}
          <div className="relative">
            {/* Decoración visual */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}