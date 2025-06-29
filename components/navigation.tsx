'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSearch, faGlobe, faLock, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'OUR MISSION', href: '/our-mission' },
  { name: 'PROFILE', href: '/profile' },
  { name: 'SERVICES', href: '/services' },
  { name: 'OUR CLIENTS', href: '/our-clients' },
  { name: 'PRODUCT GALLERY', href: '/product-gallery' },
  { name: 'CONTACT', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-gray-800 text-white fixed top-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-white text-gray-800 py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/Fame-Group-Logo-PNG.png"
              alt="Fame Group"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="hidden md:block text-sm text-gray-600">
            Give us a call on +44 (0) 800 123 4567
          </div>

          {/* Social Icons */}
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faTwitter} className="text-sm" />
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
            </div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faGooglePlusG} className="text-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-blue-400 uppercase px-3 py-2 rounded',
                    pathname === item.href
                      ? 'text-blue-400 bg-gray-700'
                      : 'text-white'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-white">
                  <FontAwesomeIcon icon={faBars} className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-800 text-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-blue-400 uppercase',
                        pathname === item.href
                          ? 'text-blue-400'
                          : 'text-white'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 text-white">
              <div className="cursor-pointer hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
              </div>
              <div className="cursor-pointer hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
              </div>
              <div className="cursor-pointer hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faGlobe} className="h-4 w-4" />
              </div>
              <div className="cursor-pointer hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faLock} className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}