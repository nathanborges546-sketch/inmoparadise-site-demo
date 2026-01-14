import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, X } from "lucide-react";

const operationTypes = ["Todos", "Venta", "Alquiler"] as const;
const propertyTypes = ["Todos", "Piso", "Ático", "Chalet", "Local", "Garaje"] as const;
const zones = ["Todas", "Centro", "Playa de San Juan", "El Campello", "San Vicente del Raspeig", "Mutxamel", "Puerto"] as const;

const Propiedades = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [operation, setOperation] = useState<string>("Todos");
  const [propertyType, setPropertyType] = useState<string>("Todos");
  const [zone, setZone] = useState<string>("Todas");
  const [priceRange, setPriceRange] = useState<number[]>([0, 700000]);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Operation filter
      if (operation !== "Todos") {
        const operationType = operation.toLowerCase() as "venta" | "alquiler";
        if (property.priceType !== operationType) return false;
      }

      // Property type filter
      if (propertyType !== "Todos" && property.type !== propertyType) {
        return false;
      }

      // Zone filter (simple contains check)
      if (zone !== "Todas" && !property.location.toLowerCase().includes(zone.toLowerCase())) {
        return false;
      }

      // Price filter
      if (property.price < priceRange[0] || property.price > priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [operation, propertyType, zone, priceRange]);

  const resetFilters = () => {
    setOperation("Todos");
    setPropertyType("Todos");
    setZone("Todas");
    setPriceRange([0, 700000]);
  };

  const hasActiveFilters = operation !== "Todos" || propertyType !== "Todos" || zone !== "Todas" || priceRange[0] > 0 || priceRange[1] < 700000;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Propiedades"
            subtitle="Explora nuestra selección de inmuebles en las mejores zonas de Alicante"
          />
        </div>
      </section>

      {/* Filters & Listings */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Toggle (Mobile) */}
          <div className="lg:hidden mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full justify-center"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={cn(
              "lg:w-72 shrink-0 space-y-6",
              showFilters ? "block" : "hidden lg:block"
            )}>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg font-semibold">Filtros</h3>
                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                    >
                      <X size={14} />
                      Limpiar
                    </button>
                  )}
                </div>

                {/* Operation Type */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground block mb-3">
                    Operación
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {operationTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setOperation(type)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                          operation === type
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground block mb-3">
                    Tipo de inmueble
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setPropertyType(type)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                          propertyType === type
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Zone */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground block mb-3">
                    Zona
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {zones.map((z) => (
                      <button
                        key={z}
                        onClick={() => setZone(z)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                          zone === z
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        {z}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-3">
                    Precio máximo
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={700000}
                    step={10000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(priceRange[0])}</span>
                    <span>{new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(priceRange[1])}</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Property Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">{filteredProperties.length}</span> propiedades encontradas
                </p>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map((property, index) => (
                    <div
                      key={property.id}
                      className="animate-fade-up opacity-0"
                      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                    >
                      <PropertyCard property={property} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg mb-4">
                    No se encontraron propiedades con los filtros seleccionados.
                  </p>
                  <Button variant="outline" onClick={resetFilters}>
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Propiedades;
