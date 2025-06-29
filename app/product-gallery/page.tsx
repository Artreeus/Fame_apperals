'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Black graphic t-shirt with colorful design'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Vintage style t-shirt with tree design'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Green sports jersey'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pink casual t-shirt'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'White and blue sports shirt'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Black t-shirt with graphic design'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Colorful cartoon design t-shirt'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Red sports jersey with number 03'
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Maroon t-shirt with logo'
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Yellow superhero design t-shirt'
  },
  {
    id: 11,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Black sports shirt'
  },
  {
    id: 12,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Black t-shirt with text design'
  },
  {
    id: 13,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Black long sleeve shirt'
  },
  {
    id: 14,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Gray t-shirt with design'
  },
  {
    id: 15,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pink women\'s t-shirt'
  },
  {
    id: 16,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'White and gray sports shirt'
  },
  {
    id: 17,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Green t-shirt with design'
  },
  {
    id: 18,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Navy blue t-shirt with flag design'
  },
  {
    id: 19,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Gray t-shirt with graphic'
  },
  {
    id: 20,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Green military style t-shirt'
  },
  {
    id: 21,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Black t-shirt with paw prints'
  },
  {
    id: 22,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Black t-shirt with white design'
  },
  {
    id: 23,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pink t-shirt with butterfly design'
  },
  {
    id: 24,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'White t-shirt with graphic'
  },
  {
    id: 25,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pink women\'s t-shirt'
  },
  {
    id: 26,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Yellow t-shirt with design'
  }
];

export default function ProductGalleryPage() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo(
      '.product-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">PRODUCT GALLERY</h1>
        
        <div className="product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-item group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <div className="bg-blue-400 text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Photo Gallery</h2>
          </div>
          <div className="bg-white p-6 rounded-b-lg shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.slice(0, 8).map((product) => (
                <div key={`gallery-${product.id}`} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">FAME</div>
                <div className="text-4xl italic">Group</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-gray-600">Fame Group Factory Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}