import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Property {
  id: string;
  title: string;
  price: number;
  priceType: "venta" | "alquiler";
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link
      to={`/propiedades/${property.id}`}
      className={cn(
        "group block bg-card rounded-xl overflow-hidden shadow-card hover-lift",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Price Tag */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
            {formattedPrice}
            {property.priceType === "alquiler" && <span className="font-normal">/mes</span>}
          </span>
        </div>
        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-foreground/80 text-background px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
            {property.priceType === "venta" ? "Venta" : "Alquiler"}
          </span>
        </div>
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Destacado
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-semibold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors">
          {property.title}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bed size={16} />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bath size={16} />
              <span>{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Maximize size={16} />
            <span>{property.area} m²</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
          <span>Ver detalle</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
