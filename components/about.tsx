'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, Globe, ArrowRight, Sparkles } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Team Members', value: '500+' },
  { icon: Award, label: 'Awards Won', value: '25+' },
  { icon: Globe, label: 'Countries Served', value: '50+' },
  { icon: CheckCircle, label: 'Quality Rating', value: '99.8%' },
];

const values = [
  {
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and sustainable manufacturing processes.',
    icon: '🌱',
  },
  {
    title: 'Quality',
    description: 'Uncompromising standards in every stitch, every fabric, every garment.',
    icon: '⭐',
  },
  {
    title: 'Innovation',
    description: 'Embracing cutting-edge technology and creative design solutions.',
    icon: '🚀',
  },
  {
    title: 'Partnership',
    description: 'Building lasting relationships with clients, suppliers, and communities.',
    icon: '🤝',
  },
];

const milestones = [
  { 
    year: '2001', 
    title: 'Company Founded', 
    description: 'Started with a vision to revolutionize garment manufacturing with innovation and quality.' 
  },
  { 
    year: '2008', 
    title: 'International Expansion', 
    description: 'Opened our first international manufacturing facility, marking global presence.' 
  },
  { 
    year: '2015', 
    title: 'Sustainability Initiative', 
    description: 'Launched comprehensive eco-friendly manufacturing processes and green technology.' 
  },
  { 
    year: '2020', 
    title: 'Digital Transformation', 
    description: 'Implemented cutting-edge AI and automation across all manufacturing operations.' 
  },
  { 
    year: '2024', 
    title: 'Global Recognition', 
    description: 'Achieved industry-leading quality certifications and sustainability awards worldwide.' 
  },
];

export function About() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-muted/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <Badge className="mb-6 hover:shadow-lg hover:scale-105 transition-all duration-300 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                About Fame Group
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">24 Years of</span>
                <span className="text-primary animate-pulse-subtle">
                  Excellence
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-2">
                  in Garment Manufacturing
                </span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2001, Fame Group has established itself as a 
                  <span className="font-semibold text-primary"> leading innovator </span>
                  in the garment manufacturing industry. We combine traditional craftsmanship with 
                  cutting-edge technology to create exceptional apparel.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to excellence has earned us the trust of clients worldwide, 
                  from emerging brands to established fashion houses. We don't just make clothing – 
                  <span className="font-semibold text-primary"> we craft the future of fashion.</span>
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-7 w-7 text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                <span>Discover Our Story</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Image Section */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            <div className="relative group">
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float-delayed"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fame Group Manufacturing"
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-border group-hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        50M+
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Garments Produced
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Section */}
        <div className="mt-32">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-6 bg-muted text-muted-foreground border-border hover:bg-primary/10 hover:text-primary transition-all duration-300">
              Our Foundation
            </Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Core <span className="text-primary">Values</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and every decision we make in our journey towards excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-background/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative p-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150"></div>
                    <div className="relative text-5xl group-hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Hover Effect Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fixed Timeline Section */}
        <div className="mt-32">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-6 bg-muted text-muted-foreground border-border">
              Our Evolution
            </Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-primary">Journey</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Key milestones that shaped Fame Group into the industry leader we are today.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full"></div>
            
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-6 h-6 bg-primary rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'ml-auto pl-16 text-left'}`}>
                    <Card className="group bg-background/80 backdrop-blur-sm border-border hover:bg-background hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {milestone.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="absolute left-0 top-0 w-1 h-full bg-primary/20 rounded-full"></div>
                <div className="absolute left-0 top-6 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg"></div>
                </div>
                
                <Card className="group bg-background/80 backdrop-blur-sm border-border hover:bg-background hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {milestone.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 6s ease-in-out infinite 2s; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-pulse-subtle { animation: pulse-subtle 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}