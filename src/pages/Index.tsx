import { Link } from "react-router-dom";
import { ArrowRight, Home, Key, Building2, Shield, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { PropertyCard } from "@/components/PropertyCard";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { properties } from "@/data/properties";

const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);

const services = [
  {
    title: "Comprar",
    description: "Te ayudamos a encontrar la propiedad perfecta. Accede a nuestra selección exclusiva de inmuebles en las mejores zonas de Alicante.",
    icon: Home,
    href: "/servicios",
  },
  {
    title: "Vender",
    description: "Maximiza el valor de tu propiedad con nuestra estrategia de venta personalizada, marketing profesional y negociación experta.",
    icon: Key,
    href: "/vender",
  },
  {
    title: "Alquilar",
    description: "Gestión integral de alquileres tanto para propietarios como inquilinos. Seguridad y tranquilidad garantizadas.",
    icon: Building2,
    href: "/servicios",
  },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Transparencia total",
    description: "Sin sorpresas ni costes ocultos. Te informamos de todo el proceso con claridad.",
  },
  {
    icon: Users,
    title: "Trato personalizado",
    description: "Cada cliente es único. Adaptamos nuestros servicios a tus necesidades específicas.",
  },
  {
    icon: Sparkles,
    title: "Experiencia local",
    description: "Conocemos Alicante como nadie. Te asesoramos con conocimiento real del mercado.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury property in Alicante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-gradient" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up opacity-0 delay-100">
              Inmobiliaria en Alicante
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up opacity-0 delay-200">
              Encontramos la casa<br />
              <span className="text-primary">de tus sueños</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed animate-fade-up opacity-0 delay-300">
              Tu inmobiliaria de confianza en Alicante. Servicio personalizado, transparencia y experiencia local para ayudarte en cada paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-400">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
                <Link to="/propiedades">
                  Ver propiedades
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
                <Link to="/vender">
                  Vender mi inmueble
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
                Selección exclusiva
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Propiedades destacadas
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full self-start md:self-auto">
              <Link to="/propiedades">
                Ver todas
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Nuestros servicios"
            subtitle="Te acompañamos en cada paso del camino, ya sea que busques comprar, vender o alquilar."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Real estate consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated max-w-xs hidden md:block">
                <p className="text-foreground font-serif text-lg font-semibold mb-1">
                  Más de 15 años
                </p>
                <p className="text-muted-foreground text-sm">
                  de experiencia en el mercado inmobiliario de Alicante
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
                ¿Por qué elegirnos?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Tu tranquilidad es nuestra prioridad
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                En InmoParadise entendemos que comprar, vender o alquilar una propiedad es una de las decisiones más importantes de tu vida. Por eso, nos comprometemos a ofrecerte un servicio excepcional en cada paso.
              </p>

              <div className="space-y-6">
                {trustPoints.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                ¿Listo para dar el siguiente paso?
              </h2>
              <p className="text-background/70 text-lg leading-relaxed mb-8">
                Ya sea que busques tu nueva casa, quieras vender tu propiedad o necesites asesoramiento, estamos aquí para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
                  <Link to="/propiedades">
                    Explorar propiedades
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-background/30 text-background hover:bg-background hover:text-foreground">
                  <Link to="/contacto">
                    Contactar ahora
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-elevated">
              <h3 className="font-serif text-xl font-semibold mb-6">Escríbenos</h3>
              <ContactForm variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
