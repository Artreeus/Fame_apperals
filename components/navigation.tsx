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
  Phone
} from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-gray-800/95 backdrop-blur-sm shadow-lg" 
        : "bg-gray-800"
    )}>
      {/* Top Bar */}
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-2">
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
            <div className="hidden xl:flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4 mr-2 text-blue-500" />
              <span>Give us a call on +88 01713 042644</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-800 dark:bg-gray-900 border-t border-gray-700 dark:border-gray-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 sm:h-14 items-center justify-between">
            {/* Desktop Navigation - Hidden on tablets and mobile */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 hover:text-blue-400 uppercase px-3 xl:px-4 py-2 rounded-md relative group',
                    pathname === item.href
                      ? 'text-blue-400 bg-gray-700/50'
                      : 'text-white hover:bg-gray-700/30'
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    pathname === item.href && "scale-x-100"
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
                    'text-xs font-medium transition-all duration-300 hover:text-blue-400 uppercase px-2 py-2 rounded-md relative group',
                    pathname === item.href
                      ? 'text-blue-400 bg-gray-700/50'
                      : 'text-white hover:bg-gray-700/30'
                  )}
                >
                  {item.name.length > 10 ? item.name.substring(0, 8) + '...' : item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    pathname === item.href && "scale-x-100"
                  )} />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - Visible on mobile and small tablets */}
            <div className="flex lg:hidden items-center flex-1 justify-center">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white hover:text-blue-400 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="ml-2 text-sm font-medium">MENU</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[280px] sm:w-[320px] bg-gray-800 dark:bg-gray-900 text-white border-gray-700"
                >
                  <div className="flex items-center justify-between mb-8">
                    <Image
                      src="/Fame-Group-Logo-PNG.png"
                      alt="Fame Group"
                      width={150}
                      height={45}
                      className="h-8 w-auto brightness-0 invert"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-blue-400"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-base font-medium transition-all duration-300 hover:text-blue-400 uppercase px-4 py-3 rounded-md border-l-4 border-transparent hover:border-blue-400 hover:bg-gray-700/30',
                          pathname === item.href
                            ? 'text-blue-400 border-blue-400 bg-gray-700/50'
                            : 'text-white'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Phone className="w-4 h-4 mr-2 text-blue-400" />
                      <span>+88 01713 042644</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      <span>famefdl@gmail.com</span>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3 text-white">
              <button className="p-1.5 sm:p-2 hover:text-blue-400 hover:bg-gray-700/50 rounded-md transition-all duration-300 group">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Email</span>
              </button>
              <button className="p-1.5 sm:p-2 hover:text-blue-400 hover:bg-gray-700/50 rounded-md transition-all duration-300 group">
                <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Search</span>
              </button>
              <button className="hidden sm:block p-1.5 sm:p-2 hover:text-blue-400 hover:bg-gray-700/50 rounded-md transition-all duration-300 group">
                <Globe className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Language</span>
              </button>
              <button className="hidden sm:block p-1.5 sm:p-2 hover:text-blue-400 hover:bg-gray-700/50 rounded-md transition-all duration-300 group">
                <Lock className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Security</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}