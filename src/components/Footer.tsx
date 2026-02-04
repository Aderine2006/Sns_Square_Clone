import Logo from "./Logo";
import { Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Agentic Workbench": ["Foundation Agent", "Industrial Solutions"],
    Company: ["About Us", "Blog", "Contact Us", "Privacy policy", "Terms of Service"],
  };

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Logo />
          </div>

          {/* Agentic Workbench */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Agentic Workbench</h4>
            <ul className="space-y-2">
              {footerLinks["Agentic Workbench"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Address</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              BLOCK-L, Embassy Tech Village,<br />
              Outer Ring Rd,<br />
              Devarabisanahalli, Bellandur,<br />
              Bengaluru, Karnataka 560103
            </p>
          </div>

          {/* Email & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Email</h4>
            <a href="mailto:info@snssquare.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              info@snssquare.com
            </a>

            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm">
            © 2025 SNS Square. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
