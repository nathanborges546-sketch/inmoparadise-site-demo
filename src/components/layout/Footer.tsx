import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Vender", href: "/vender" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const legalLinks = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
  { label: "Aviso legal", href: "/aviso-legal" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="InmoParadise - Agencia Inmobiliaria" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Tu inmobiliaria de confianza en Alicante. Encontramos la casa de tus sueños con un servicio personalizado y transparente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <a href="https://wa.me/34722503695" className="text-background/70 hover:text-primary transition-colors block">
                    +34 722 503 695 (Benalúa)
                  </a>
                  <a href="https://wa.me/34722503695" className="text-background/70 hover:text-primary transition-colors block">
                    +34 722 50 36 95 (Carolinas)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@inmoparadise.com" className="text-background/70 hover:text-primary transition-colors text-sm">
                  info@inmoparadise.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  Alicante, España
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} InmoParadise. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              {/* Social placeholders */}
              <a href="#" className="text-background/50 hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45,20.45H16.89V14.88c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.66H9.34V9h3.41v1.56h.05a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46v6.32ZM5.34,7.43A2.07,2.07,0,1,1,7.41,5.36,2.07,2.07,0,0,1,5.34,7.43Zm1.78,13H3.56V9H7.12ZM22.22,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
