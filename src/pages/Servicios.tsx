import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Key, 
  Building2, 
  Search, 
  FileText, 
  Handshake, 
  CheckCircle2,
  ArrowRight,
  Camera,
  Users,
  TrendingUp,
  Shield
} from "lucide-react";

const buyingSteps = [
  { icon: Search, title: "Búsqueda personalizada", description: "Analizamos tus necesidades y te mostramos propiedades que encajan con tu perfil." },
  { icon: Home, title: "Visitas guiadas", description: "Te acompañamos en cada visita, resolviendo todas tus dudas sobre cada inmueble." },
  { icon: FileText, title: "Asesoramiento legal", description: "Revisamos toda la documentación y te asesoramos sobre aspectos legales y fiscales." },
  { icon: Handshake, title: "Negociación y cierre", description: "Negociamos las mejores condiciones y te acompañamos hasta la firma." },
];

const sellingSteps = [
  { icon: Camera, title: "Valoración profesional", description: "Evaluamos tu propiedad con criterios de mercado para fijar el precio óptimo." },
  { icon: TrendingUp, title: "Marketing premium", description: "Fotografía profesional, tours virtuales y difusión en los principales portales." },
  { icon: Users, title: "Gestión de visitas", description: "Filtramos compradores cualificados y organizamos las visitas por ti." },
  { icon: Shield, title: "Cierre seguro", description: "Acompañamiento completo hasta la firma en notaría con total seguridad." },
];

const rentingBenefits = [
  "Búsqueda y selección de inquilinos verificados",
  "Redacción de contratos legalmente seguros",
  "Gestión de depósitos y fianzas",
  "Seguimiento de pagos y resolución de incidencias",
  "Asesoramiento legal continuo",
  "Informes periódicos para propietarios",
];

const Servicios = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Nuestros servicios"
            subtitle="Te acompañamos en cada paso del camino inmobiliario con profesionalidad y cercanía"
          />
        </div>
      </section>

      {/* Buying Section */}
      <section id="compra" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Comprar tu nuevo hogar
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Encontrar la casa perfecta puede ser abrumador. Nosotros simplificamos el proceso, desde la búsqueda inicial hasta las llaves en tu mano. Te guiamos con experiencia local y dedicación personalizada.
              </p>

              <div className="space-y-4 mb-8">
                {buyingSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="rounded-full px-8">
                <Link to="/propiedades">
                  Ver propiedades disponibles
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Beautiful home interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Section */}
      <section id="venta" className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Property for sale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Key className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Vender tu propiedad
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Maximiza el valor de tu inmueble con nuestra estrategia de venta integral. Combinamos experiencia de mercado, marketing profesional y negociación experta para conseguir las mejores condiciones.
              </p>

              <div className="space-y-4 mb-8">
                {sellingSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center shrink-0 shadow-soft">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="rounded-full px-8">
                <Link to="/vender">
                  Quiero vender mi inmueble
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Renting Section */}
      <section id="alquiler" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Gestión de alquileres
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Tanto si eres propietario como inquilino, te ofrecemos una gestión integral que garantiza tranquilidad y seguridad. Nos ocupamos de todo para que tú solo te preocupes de disfrutar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {rentingBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="rounded-full px-8">
                <Link to="/contacto">
                  Solicitar información
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
                  alt="Rental apartment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            ¿Necesitas asesoramiento personalizado?
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
            Cada situación es única. Cuéntanos tu caso y te orientamos sin compromiso.
          </p>
          <Button asChild size="lg" className="rounded-full px-10 h-14 text-base">
            <Link to="/contacto">
              Contactar ahora
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
