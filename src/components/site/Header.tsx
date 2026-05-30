import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

const links = [
  { to: "/framework", label: "Framework" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="flex items-end gap-0.5" aria-label="The Clinical Executives — home">
          <img src={logoMark} alt="" width={48} height={48} className="h-12 w-12 object-contain -mr-1" />
          <span className="flex items-baseline gap-2 leading-none">
            <span className="font-serif text-lg tracking-tight text-primary sm:text-xl leading-none">
              The Clinical Executives
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-gold sm:inline">
              Strategy &amp; Leadership
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/subscribe"
            className="inline-flex h-9 items-center justify-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Subscribe
          </Link>
        </nav>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav className="container-prose md:hidden pb-4 space-y-2" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/80"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/subscribe"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-9 items-center justify-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground"
          >
            Subscribe
          </Link>
        </nav>
      )}
    </header>
  );
}