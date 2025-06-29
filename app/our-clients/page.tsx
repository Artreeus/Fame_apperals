'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { 
  Users, 
  Globe, 
  Award, 
  Camera, 
  Play, 
  Building2,
  MapPin,
  Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "Zeeman Textielsupers B.V.", country: "Netherlands" },
  { name: "KiK Textilien Und Non Food GMBH", country: "Germany" },
  { name: "Offtex AG", country: "Switzerland" },
  { name: "Sicem International SRL", country: "Italy" },
  { name: "Texl Clothing Pty Ltd", country: "Australia" },
  { name: "Pep A Division of Pepkor Retail Ltd", country: "South Africa" },
  { name: "Teedy Smith", country: "France" },
  { name: "Comercial Losan SLU", country: "Spain" },
  { name: "Fotex AS", country: "Denmark" },
  { name: "Bilka AS", country: "Denmark" },
  { name: "Wibra Supermarkt B.V", country: "Netherlands" },
  { name: "Lutfy Apparel Ltd", country: "Canada" },
  { name: "LPP S.A", country: "Poland" },
  { name: "Velilla Confeccion Industrial SA", country: "Spain" },
  { name: "Chooli Fashion BV", country: "Netherlands" },
  { name: "Best & Less Australia", country: "Australia" }
];

export default function OurClientsPage() {
  useEffect(() => {
    // Hero title animation
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }
    );

    // Staggered content animations
    gsap.fromTo(
      '.fade-in',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Client card hover animations
    gsap.utils.toArray('.client-card').forEach((card: any) => {
      gsap.set(card, { scale: 1 });
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    // Gallery hover animations
    gsap.utils.toArray('.gallery-item').forEach((item: any) => {
      gsap.set(item, { scale: 1 });
      
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8 md:py-12">
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground mt-20">
              OUR CLIENTS
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Trusted partners across the globe who believe in our quality and service excellence
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Client List */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Introduction */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Our Valued Partners</h2>
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  With our quality and service we are able to achieve the confidence of the following buyers:
                </p>
              </CardContent>
            </Card>

            {/* Client Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 fade-in">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-2 md:mb-3">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">16+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Global Clients</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="p-2 md:p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-2 md:mb-3">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">12+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-all duration-300 col-span-2 md:col-span-1">
                <CardContent className="p-4 md:p-6">
                  <div className="p-2 md:p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-fit mx-auto mb-2 md:mb-3">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">20+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>

            {/* Client List */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Client Directory</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {clients.map((client, index) => (
                    <div key={index} className="client-card p-3 md:p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-1 md:mb-2">
                            <span className="text-xs md:text-sm font-semibold text-primary mr-2">
                              {String(index + 1).padStart(2, '0')}.
                            </span>
                            <h3 className="text-sm md:text-base font-medium text-foreground leading-tight">
                              {client.name}
                            </h3>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground mr-1" />
                            <span className="text-xs md:text-sm text-muted-foreground">
                              {client.country}
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Active
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            {/* Product Showcase */}
            <div className="fade-in">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-400 dark:bg-blue-600 text-white p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-bold flex items-center">
                    <div className="p-2 bg-white/20 rounded-lg mr-3">
                      <Award className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    Product
                  </h2>
                </div>
                <CardContent className="p-4 md:p-6 bg-card">
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-4 shadow-md">
                    <Image
                      src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Product showcase"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Premium quality knitted garments for global markets
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Latest News */}
            <div className="fade-in">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-400 dark:bg-blue-600 text-white p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-bold flex items-center">
                    <div className="p-2 bg-white/20 rounded-lg mr-3">
                      <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    Latest News
                  </h2>
                </div>
                <CardContent className="p-6 md:p-8 bg-card text-center">
                  <p className="text-red-500 dark:text-red-400 font-semibold text-sm md:text-base">
                    No News available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-12 md:mt-16 fade-in">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-400 dark:bg-blue-600 text-white p-4 md:p-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
                <div className="p-2 bg-white/20 rounded-lg mr-3 md:mr-4">
                  <Camera className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                Photo Gallery
              </h2>
              <p className="text-blue-100 mt-1 md:mt-2 text-sm md:text-base">Showcasing our premium products</p>
            </div>
            <CardContent className="p-4 md:p-6 bg-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {[
                  "https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400"
                ].map((src, index) => (
                  <div key={index} className="gallery-item relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer">
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-3 md:p-4 text-xs md:text-sm font-medium">Product {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* YouTube Video Section */}
        <div className="mt-8 md:mt-12 fade-in">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-red-500 dark:bg-red-600 text-white p-4 md:p-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
                <div className="p-2 bg-white/20 rounded-lg mr-3 md:mr-4">
                  <Play className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                Fame Group Factory Profile
              </h2>
              <p className="text-red-100 mt-1 md:mt-2 text-sm md:text-base">Discover our manufacturing excellence</p>
            </div>
            <CardContent className="p-0 bg-black">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/KIJnEdserzs?si=b-5dqYJ-QUoSrniH" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}