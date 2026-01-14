import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group block bg-card p-8 rounded-xl shadow-soft hover-lift border border-border/50",
        className
      )}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA */}
      <div className="flex items-center text-primary font-medium text-sm">
        <span>Saber más</span>
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
