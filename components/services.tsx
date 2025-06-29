'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scissors, 
  Palette, 
  Truck, 
  Shield, 
  Recycle, 
  Users 
} from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Custom Manufacturing',
    description: 'End-to-end garment production tailored to your specifications and requirements.',
    features: ['Pattern Making', 'Sample Development', 'Bulk Production', 'Quality Control'],
  },
  {
    icon: Palette,
    title: 'Design & Development',
    description: 'Creative design services from concept to finished product.',
    features: ['Trend Research', 'Technical Design', 'Color Consultation', 'Prototype Creation'],
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    description: 'Comprehensive supply chain management and global logistics solutions.',
    features: ['Sourcing', 'Inventory Management', 'Global Shipping', 'Documentation'],
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring the highest standards.',
    features: ['Pre-Production Testing', 'In-Line Inspection', 'Final Audit', 'Compliance Check'],
  },
  {
    icon: Recycle,
    title: 'Sustainable Solutions',
    description: 'Eco-friendly manufacturing practices and sustainable material sourcing.',
    features: ['Organic Materials', 'Waste Reduction', 'Energy Efficiency', 'Circular Economy'],
  },
  {
    icon: Users,
    title: 'Consultation Services',
    description: 'Expert guidance and consultation for your garment business needs.',
    features: ['Market Analysis', 'Strategy Planning', 'Technical Support', 'Training Programs'],
  },
];

export function Services() {
  return (
    <section className="py-20 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Garment Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final delivery, we provide end-to-end services 
            that ensure your garment manufacturing needs are met with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can bring your garment manufacturing vision to life. 
              Our expert team is ready to provide customized solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors">
                Get a Quote
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}