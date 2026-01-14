import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Target, 
  Users, 
  Shield, 
  ArrowRight,
  Quote
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pasión por el servicio",
    description: "Cada cliente es único. Nos apasiona ayudarte a encontrar el hogar perfecto o vender tu propiedad en las mejores condiciones.",
  },
  {
    icon: Target,
    title: "Compromiso con resultados",
    description: "No nos conformamos con lo mínimo. Trabajamos incansablemente para superar tus expectativas en cada operación.",
  },
  {
    icon: Users,
    title: "Cercanía y transparencia",
    description: "Creemos en las relaciones a largo plazo basadas en la honestidad. Sin letra pequeña, sin sorpresas.",
  },
  {
    icon: Shield,
    title: "Profesionalidad",
    description: "Formación continua, conocimiento del mercado local y un equipo comprometido con la excelencia.",
  },
];

const team = [
  {
    name: "Equipo de ventas",
    role: "Asesores inmobiliarios",
    description: "Expertos en el mercado de Alicante, dedicados a encontrar la mejor solución para cada cliente.",
  },
  {
    name: "Equipo de gestión",
    role: "Administración y legal",
    description: "Garantizamos que cada operación se realice con total seguridad jurídica y transparencia.",
  },
  {
    name: "Equipo de marketing",
    role: "Comunicación y difusión",
    description: "Creamos estrategias de marketing que maximizan la visibilidad de cada propiedad.",
  },
];

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Sobre nosotros"
            subtitle="Tu inmobiliaria de confianza en Alicante desde hace más de 15 años"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="InmoParadise team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Quote Card */}
              <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-elevated max-w-sm hidden lg:block">
                <Quote className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-foreground font-serif text-lg italic leading-relaxed">
                  "Nuestro éxito se mide por la satisfacción de nuestros clientes"
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
                Nuestra historia
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Más que una inmobiliaria, tu socio de confianza
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  InmoParadise nació con una visión clara: transformar la experiencia de comprar, vender o alquilar una propiedad. Creemos que estas decisiones, entre las más importantes de la vida, merecen un acompañamiento excepcional.
                </p>
                <p>
                  Con sede en Alicante, hemos crecido junto a nuestra comunidad, conociendo cada barrio, cada calle, cada oportunidad. Este conocimiento local, combinado con un enfoque personalizado, nos permite ofrecer un servicio que va más allá de lo transaccional.
                </p>
                <p>
                  Nuestro equipo está formado por profesionales apasionados que entienden que detrás de cada propiedad hay sueños, proyectos y familias. Por eso, nos comprometemos a tratarte como nos gustaría ser tratados: con honestidad, dedicación y profesionalidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
              Nuestros valores
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Lo que nos define
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
              Nuestro equipo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Profesionales a tu servicio
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un equipo multidisciplinar comprometido con ofrecerte la mejor experiencia inmobiliaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
            Visítanos en nuestra oficina o contáctanos para una consulta sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base">
              <Link to="/contacto">
                Contactar
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-base border-background/30 text-background hover:bg-background hover:text-foreground">
              <Link to="/propiedades">
                Ver propiedades
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
