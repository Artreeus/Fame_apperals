'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const footerLinks = {
  products: [
    { name: 'T-Shirts', href: '/product-gallery' },
    { name: 'Hoodies', href: '/product-gallery' },
    { name: 'Jackets', href: '/product-gallery' },
    { name: 'Polo Shirts', href: '/product-gallery' },
    { name: 'Dresses', href: '/product-gallery' },
    { name: 'Pants', href: '/product-gallery' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Mission', href: '/our-mission' },
    { name: 'Services', href: '/services' },
    { name: 'Profile', href: '/profile' },
    { name: 'Our Clients', href: '/our-clients' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Live Chat', href: '/chat' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: faFacebookF },
  { name: 'Twitter', href: '#', icon: faTwitter },
  { name: 'Instagram', href: '#', icon: faInstagram },
  { name: 'LinkedIn', href: '#', icon: faLinkedinIn },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/Fame-Group-Logo-PNG.png"
                alt="Fame Group"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Premium garment manufacturing with 24+ years of experience. 
              Committed to quality, sustainability, and innovation in fashion.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-primary" />
                <span className="text-sm">+44 (0) 800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-primary" />
                <span className="text-sm">info@famegroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 text-primary" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs text-muted-foreground">Follow us:</span>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Fame Group. All rights reserved. Designed and developed with ❤️ for fashion excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}