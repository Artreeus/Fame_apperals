'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye } from 'lucide-react';

const featuredProducts = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'T-Shirts',
    isNew: true,
    isSale: true,
  },
  {
    id: '2',
    name: 'Organic Hoodie',
    price: 59.99,
    image: 'https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Hoodies',
    isNew: false,
    isSale: false,
  },
  {
    id: '3',
    name: 'Vintage Denim Jacket',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Jackets',
    isNew: true,
    isSale: false,
  },
  {
    id: '4',
    name: 'Sustainable Polo Shirt',
    price: 45.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Polo',
    isNew: false,
    isSale: false,
  },
];

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-20 bg-muted/50 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium garments, 
            crafted with attention to detail and sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <Badge className="bg-green-600 hover:bg-green-700">New</Badge>
                  )}
                  {product.isSale && (
                    <Badge className="bg-red-600 hover:bg-red-700">Sale</Badge>
                  )}
                </div>

                {/* Hover Actions */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center space-x-2 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Link href={`/product-gallery`}>
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xl">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/product-gallery">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}