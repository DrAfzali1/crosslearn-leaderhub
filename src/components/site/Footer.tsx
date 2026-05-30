import { Link } from "@tanstack/react-router";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="eyebrow">Integrated Clinical Executive</p>
          <h3 className="mt-3 font-serif text-2xl text-primary">
            A resource for healthcare leaders learning across disciplines.
          </h3>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/framework" className="hover:text-primary">The Framework</Link></li>
            <li><Link to="/insights" className="hover:text-primary">Insights</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services & Speaking</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Stay informed</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Cross-disciplinary leadership ideas, delivered monthly.
          </p>
          <div className="mt-4">
            <NewsletterForm source="footer" compact />
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Integrated Clinical Executive. All rights reserved.</p>
          <p>Built for clinical executives, healthcare leaders, and physician executives.</p>
        </div>
      </div>
    </footer>
  );
}