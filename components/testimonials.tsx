'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'CEO, Urban Fashion Co.',
    company: 'Urban Fashion Co.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'Fame Group has been instrumental in scaling our fashion brand. Their attention to detail and commitment to quality is unmatched. We\'ve worked with them for 3 years and they continue to exceed our expectations.',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'Founder, EcoWear',
    company: 'EcoWear',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'The sustainable manufacturing practices and ethical approach of Fame Group aligns perfectly with our brand values. They\'ve helped us create beautiful, eco-friendly garments that our customers love.',
  },
  {
    id: 3,
    name: 'Lisa Thompson',
    title: 'Creative Director, Minimalist',
    company: 'Minimalist',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'Working with Fame Group feels like having a true partner in our success. Their expertise in design and manufacturing has been crucial in bringing our minimalist aesthetic to life.',
  },
  {
    id: 4,
    name: 'David Park',
    title: 'COO, Athletic Pro',
    company: 'Athletic Pro',
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    content: 'The technical expertise and innovation capabilities of Fame Group have been game-changing for our athletic wear line. They understand the performance requirements and deliver exceptional results.',
  },
];

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 bg-muted/50 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">Client Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with Fame Group.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Testimonial */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-primary mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonials[activeTestimonial].image} />
                    <AvatarFallback>
                      {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonials[activeTestimonial].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeTestimonial].title}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  index === activeTestimonial 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}