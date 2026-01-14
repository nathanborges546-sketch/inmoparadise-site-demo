import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Camera, 
  TrendingUp, 
  Users, 
  Shield, 
  CheckCircle2,
  Send,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Valoración profesional",
    description: "Analizamos tu propiedad y el mercado para establecer el precio óptimo de venta.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Marketing premium",
    description: "Fotografía profesional, tour virtual y difusión en los principales portales inmobiliarios.",
  },
  {
    number: "03",
    icon: Users,
    title: "Gestión de visitas",
    description: "Filtramos compradores cualificados y organizamos las visitas para maximizar tu tiempo.",
  },
  {
    number: "04",
    icon: Shield,
    title: "Cierre seguro",
    description: "Negociación experta y acompañamiento completo hasta la firma en notaría.",
  },
];

const benefits = [
  "Valoración gratuita sin compromiso",
  "Fotografía y vídeo profesional incluido",
  "Difusión en los principales portales",
  "Gestión completa de visitas",
  "Asesoramiento legal y fiscal",
  "Sin costes hasta la venta",
];

const propertyTypes = ["Piso", "Ático", "Chalet", "Local comercial", "Garaje", "Solar", "Otro"];

const Vender = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Vende tu propiedad"
            subtitle="Maximiza el valor de tu inmueble con nuestra estrategia de venta integral y experiencia local"
          />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
              Proceso de venta
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Cómo trabajamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border -z-10" />
                )}

                <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-serif font-bold text-primary/20">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Benefits Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Benefits */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
                ¿Por qué elegirnos?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Vendemos tu inmueble con las mejores condiciones
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nuestro equipo de expertos locales conoce el mercado de Alicante como nadie. Combinamos estrategia, tecnología y dedicación para conseguir el mejor resultado.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats placeholder */}
              <div className="grid grid-cols-2 gap-6 mt-10 p-6 bg-card rounded-xl shadow-soft">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-primary mb-1">95%</p>
                  <p className="text-muted-foreground text-sm">Propiedades vendidas en menos de 90 días</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-primary mb-1">+500</p>
                  <p className="text-muted-foreground text-sm">Ventas realizadas con éxito</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="font-serif text-2xl font-semibold mb-2">Solicita tu valoración gratuita</h3>
              <p className="text-muted-foreground mb-8">
                Rellena el formulario y te contactamos en menos de 24 horas.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold mb-2">¡Solicitud enviada!</h4>
                  <p className="text-muted-foreground text-sm">
                    Nos pondremos en contacto contigo muy pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input id="name" placeholder="Tu nombre" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input id="phone" type="tel" placeholder="+34 600 000 000" required className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label>Tipo de inmueble *</Label>
                    <div className="flex flex-wrap gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedType === type
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zone">Zona / Dirección</Label>
                    <Input id="zone" placeholder="Ej: Playa de San Juan, Alicante" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos más sobre tu propiedad..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 rounded-full text-base">
                    <Send size={18} className="mr-2" />
                    Solicitar valoración gratuita
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario aceptas nuestra política de privacidad
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            ¿Prefieres hablar directamente?
          </h2>
          <p className="text-background/70 mb-6">
            Llámanos y resolvemos todas tus dudas sin compromiso
          </p>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-background/30 text-background hover:bg-background hover:text-foreground">
            <a href="tel:+34600000000">
              Llamar ahora
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Vender;
