export default function ContactFormSection() {
  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* This would import the ContactForm component */}
          <div className="card p-8 text-center text-gray-600">
            <p>Formulario de contacto disponible en /contacto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
