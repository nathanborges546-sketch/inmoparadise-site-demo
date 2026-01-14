import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    lines: ["+34 600 000 000", "+34 965 000 000"],
    href: "tel:+34600000000",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@inmoparadise.com"],
    href: "mailto:info@inmoparadise.com",
  },
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Calle Ejemplo, 123", "03001 Alicante, España"],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lunes a Viernes: 9:00 - 19:00", "Sábados: 10:00 - 14:00"],
  },
];

const Contacto = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Contacto"
            subtitle="Estamos aquí para ayudarte. Cuéntanos cómo podemos asistirte"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
                Información de contacto
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Hablemos sobre tu proyecto
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Ya sea que busques comprar, vender o alquilar, nuestro equipo está listo para ayudarte. Contáctanos por el medio que prefieras.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.lines.map((line, index) => (
                        item.href ? (
                          <a
                            key={index}
                            href={item.href}
                            className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={index} className="text-muted-foreground text-sm">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[16/9] bg-secondary rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground font-medium">Mapa de ubicación</p>
                    <p className="text-muted-foreground text-sm">Alicante, España</p>
                  </div>
                </div>
                {/* You can replace this with an actual map embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50055.15095588789!2d-0.5247376!3d38.3451883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6234e1e4c7f2a7%3A0x40f3a8e8c7e7c0a0!2sAlicante%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de InmoParadise"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-fit lg:sticky lg:top-32">
              <h3 className="font-serif text-2xl font-semibold mb-2">Envíanos un mensaje</h3>
              <p className="text-muted-foreground mb-8">
                Rellena el formulario y te responderemos lo antes posible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            ¿Prefieres una llamada?
          </h2>
          <p className="text-muted-foreground mb-6">
            Estamos disponibles de lunes a viernes de 9:00 a 19:00
          </p>
          <a
            href="tel:+34600000000"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
          >
            <Phone size={20} />
            +34 600 000 000
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
