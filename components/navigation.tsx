'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  Twitter, 
  Facebook, 
  Mail, 
  Search, 
  Globe, 
  Lock, 
  Menu, 
  X,
  Phone,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Mission', href: '/our-mission' },
  { name: 'Profile', href: '/profile' },
  { name: 'Services', href: '/services' },
  { name: 'Our Clients', href: '/our-clients' },
  { name: 'Product Gallery', href: '/product-gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href;
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800" 
          : "bg-black shadow-sm"
      )}>
        {/* Top Bar */}
        <div className="bg-gray-900 text-white py-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center min-h-[3rem]">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <Image
                  src="/Fame-Group-Logo-PNG.png"
                  alt="Fame Group"
                  width={200}
                  height={60}
                  className="h-8 sm:h-10 md:h-12 w-auto"
                  priority
                />
              </div>

              {/* Contact Info - Hidden on mobile and small tablets */}
              <div className="hidden xl:flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>Give us a call on +88 01713 042644</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110">
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-black border-b border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 sm:h-16 items-center justify-between">
              {/* Mobile Menu Button - Left side on mobile */}
              <div className="flex lg:hidden">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="text-white hover:text-gray-300 hover:bg-gray-800 transition-all duration-300"
                >
                  <Menu className="h-5 w-5" />
                  <span className="ml-2 text-sm font-medium">Menu</span>
                </Button>
              </div>

              {/* Desktop Navigation - Hidden on tablets and mobile */}
              <nav className="hidden xl:flex items-center space-x-1 flex-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg relative group',
                      isActiveRoute(item.href)
                        ? 'text-white bg-gray-800'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    )}
                  >
                    {item.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                      isActiveRoute(item.href) && "scale-x-100"
                    )} />
                  </Link>
                ))}
              </nav>

              {/* Medium Screen Navigation - Visible on large tablets */}
              <nav className="hidden lg:flex xl:hidden items-center space-x-1 flex-1 justify-center">
                {navigation.slice(0, 6).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-xs font-medium transition-all duration-300 px-3 py-2 rounded-lg relative group',
                      isActiveRoute(item.href)
                        ? 'text-white bg-gray-800'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    )}
                  >
                    {item.name.length > 12 ? item.name.substring(0, 10) + '...' : item.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                      isActiveRoute(item.href) && "scale-x-100"
                    )} />
                  </Link>
                ))}
              </nav>

              {/* Action Icons */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 group">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Email</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 group">
                  <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Search</span>
                </button>
                <button className="hidden sm:block p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 group">
                  <Globe className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Language</span>
                </button>
                <button className="hidden sm:block p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 group">
                  <Lock className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Security</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Mobile Menu Panel */}
          <div 
            className="fixed right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out border-l border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <Image
                src="/Fame-Group-Logo-PNG.png"
                alt="Fame Group"
                width={150}
                height={45}
                className="h-8 w-auto"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full p-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Navigation Links */}
            <div className="py-6">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between px-6 py-4 text-base font-medium transition-all duration-200 group',
                    isActiveRoute(item.href)
                      ? 'text-white bg-gray-800 border-r-4 border-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  )}
                >
                  <span>{item.name}</span>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-all duration-200",
                    isActiveRoute(item.href) 
                      ? "text-white transform translate-x-1" 
                      : "text-gray-500 group-hover:text-white group-hover:transform group-hover:translate-x-1"
                  )} />
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-800 border-t border-gray-700">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-white" />
                  <span>+88 01713 042644</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-white" />
                  <span>famefdl@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}