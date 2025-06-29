'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'tshirts',
    name: 'T-Shirts',
    description: 'Premium cotton and sustainable materials',
    image: './b1.jpg',
    productCount: 145,
  },
  {
    id: 'hoodies',
    name: 'Hoodies',
    description: 'Comfortable and stylish for all seasons',
     image: './b2.jpg',
    productCount: 87,
  },
  {
    id: 'jackets',
    name: 'Jackets',
    description: 'Outerwear that makes a statement',
     image: './b3.jpg',
    productCount: 64,
  },
  {
    id: 'polo',
    name: 'Polo Shirts',
    description: 'Classic elegance meets modern comfort',
     image: './b4.jpg',
    productCount: 92,
  },
  {
    id: 'dresses',
    name: 'Dresses',
    description: 'Elegant designs for every occasion',
     image: './b5.png',
    productCount: 78,
  },
  {
    id: 'pants',
    name: 'Pants',
    description: 'From casual to formal wear',
     image: './b6.jpg',
    productCount: 103,
  },
];

export function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-20 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of garment categories, 
            each crafted with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/product-gallery`}>
              <Card 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Hover Arrow */}
                  <div className={`absolute top-4 right-4 transition-all duration-300 ${
                    hoveredCategory === category.id 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-2 opacity-0'
                  }`}>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">{category.description}</p>
                    <p className="text-xs text-gray-300">{category.productCount} products</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}