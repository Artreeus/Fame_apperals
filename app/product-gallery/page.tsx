'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { 
  Camera, 
  Play, 
  Grid3X3, 
  Package,
  Shirt,
  Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Using your local images from public folder (1.jpg to 16.jpg)
const products = [
  { id: 1, image: '/1.jpg', alt: 'Premium knitted garment design 1' },
  { id: 2, image: '/2.jpg', alt: 'Premium knitted garment design 2' },
  { id: 3, image: '/3.jpg', alt: 'Premium knitted garment design 3' },
  { id: 4, image: '/4.jpg', alt: 'Premium knitted garment design 4' },
  { id: 5, image: '/5.jpg', alt: 'Premium knitted garment design 5' },
  { id: 6, image: '/6.jpg', alt: 'Premium knitted garment design 6' },
  { id: 7, image: '/7.jpg', alt: 'Premium knitted garment design 7' },
  { id: 8, image: '/8.jpg', alt: 'Premium knitted garment design 8' },
  { id: 9, image: '/9.jpg', alt: 'Premium knitted garment design 9' },
 
  { id: 11, image: '/11.jpg', alt: 'Premium knitted garment design 11' },
  { id: 12, image: '/12.jpg', alt: 'Premium knitted garment design 12' },
  { id: 13, image: '/13.jpg', alt: 'Premium knitted garment design 13' },
  { id: 14, image: '/14.jpg', alt: 'Premium knitted garment design 14' },
  { id: 15, image: '/15.jpg', alt: 'Premium knitted garment design 15' },
  { id: 16, image: '/16.jpg', alt: 'Premium knitted garment design 16' }
];

export default function ProductGalleryPage() {
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

    // Product grid animations
    gsap.fromTo(
      '.product-item',
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.product-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
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

    // Product hover animations
    gsap.utils.toArray('.product-item').forEach((item: any) => {
      gsap.set(item, { scale: 1 });
      
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.03, duration: 0.3, ease: 'power2.out' });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
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
              PRODUCT GALLERY
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our premium collection of knitted garments crafted with excellence and attention to detail
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Product Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 fade-in">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 md:p-6">
              <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-2 md:mb-3">
                <Package className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-foreground">16+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Product Designs</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 md:p-6">
              <div className="p-2 md:p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-2 md:mb-3">
                <Shirt className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Quality Assured</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 md:p-6">
              <div className="p-2 md:p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-fit mx-auto mb-2 md:mb-3">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-foreground">Premium</div>
              <div className="text-xs md:text-sm text-muted-foreground">Materials</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 md:p-6">
              <div className="p-2 md:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit mx-auto mb-2 md:mb-3">
                <Grid3X3 className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-foreground">Custom</div>
              <div className="text-xs md:text-sm text-muted-foreground">Designs</div>
            </CardContent>
          </Card>
        </div>

        {/* Product Gallery Introduction */}
        <Card className="fade-in mb-8 md:mb-12 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                <Package className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Our Product Collection</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Explore our diverse range of premium knitted garments, each designed with meticulous attention to detail and crafted using the finest materials. From casual wear to professional attire, our collection represents the perfect blend of style, comfort, and durability.
            </p>
          </CardContent>
        </Card>

        {/* Main Product Grid */}
        <div className="product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-item group cursor-pointer overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Design {product.id}
                      </Badge>
                      <div className="text-white text-xs md:text-sm font-medium">
                        Premium Quality
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-medium text-foreground mb-1">
                  Product Design {product.id}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Premium knitted garment
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="fade-in mb-12 md:mb-16">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-400 dark:bg-blue-600 text-white p-4 md:p-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
                <div className="p-2 bg-white/20 rounded-lg mr-3 md:mr-4">
                  <Camera className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                Photo Gallery
              </h2>
              <p className="text-blue-100 mt-1 md:mt-2 text-sm md:text-base">Featured product highlights</p>
            </div>
            <CardContent className="p-4 md:p-6 bg-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {products.slice(0, 8).map((product) => (
                  <div key={`gallery-${product.id}`} className="gallery-item relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-3 md:p-4 text-xs md:text-sm font-medium">Design {product.id}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* YouTube Video Section */}
        <div className="fade-in">
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