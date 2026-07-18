import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream/90 pt-16 pb-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand & Tagline */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/logo-light.png"
              alt="Horizon Virtual Care Logo"
              width={200}
              height={40}
              style={{ width: "auto" }}
              className="h-10 object-contain"
            />
          </Link>
          <p className="font-body text-sm text-cream/70 leading-relaxed max-w-xs">
            Bringing high-quality virtual nephrology care directly to your local community health facilities.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2.5 font-body text-sm">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/what-we-do" className="hover:text-accent transition-colors">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-accent transition-colors">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-3 font-body text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span>(800) 555-0199</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <a href="mailto:info@horizonvirtualcare.com" className="hover:text-white transition-colors">
                info@horizonvirtualcare.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span>
                100 Medical Center Pkwy<br />
                Suite 400<br />
                Cape Girardeau, MO 63701
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-semibold text-white">Follow Us</h3>
          <p className="font-body text-sm text-cream/70 leading-relaxed">
            Stay up to date with our telehealth expansion and industry resources.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-primary/45 rounded-full hover:bg-accent transition-colors text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-primary/45 rounded-full hover:bg-accent transition-colors text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 my-8 border-t border-cream/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50 font-body">
        <p>© {currentYear} Horizon Virtual Care. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream/80 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-cream/80 transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
