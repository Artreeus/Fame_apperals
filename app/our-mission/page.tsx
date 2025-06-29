'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Leaf, Target, Users, Heart, Camera, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OurMissionPage() {
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
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4  text-foreground mt-20">
              OUR MISSION
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building a sustainable future through ethical business practices and human-centered values
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <Card className="fade-in group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Our vision is to become a window through which all our interacting parties can see and feel their prospect and dream about their success. FAL will become a lifestyle brand for its employees, suppliers, buyers and above all shall become a role model of a green corporate house which will be regarded as an icon brand in the country.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                FAL will be known as an entity whose main driven force is its human resources. With such a motivated, high skilled and professional workforce, FAL has started marching towards its glory of success which is not the profit but to enjoy the joy of life.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base md:text-lg font-semibold text-foreground flex items-center">
                  <Users className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" />
                  Core Philosophy & Ethical Views
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {['Human Spirit', 'Ethical Business Practice', 'Protecting Environment'].map((item, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 md:mr-3"></div>
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SBTi Section */}
        <Card className="fade-in mb-12 md:mb-16 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
              <div className="flex items-center mb-3 md:mb-0">
                <div className="p-2 md:p-3 bg-green-200 dark:bg-green-800 rounded-full mr-3 md:mr-4">
                  <Leaf className="w-6 h-6 md:w-8 md:h-8 text-green-700 dark:text-green-300" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 dark:text-green-200">
                  Science-Based target Initiative (SBTi)
                </h3>
              </div>
              <Badge className="ml-auto bg-green-600 hover:bg-green-700 text-xs md:text-sm px-3 py-1 md:px-4 md:py-2">
                42% Reduction Target
              </Badge>
            </div>
            
            <div className="space-y-3 md:space-y-4 text-green-700 dark:text-green-300">
              <p className="text-sm md:text-base leading-relaxed">
                We (Fame Apparels Ltd. & Kentucky Textiles Ltd.) set a greenhouse gas emissions target covering our Scope 1 & 2 emissions.
              </p>
              <div className="bg-white/50 dark:bg-green-900/30 p-4 md:p-6 rounded-lg border border-green-200 dark:border-green-700">
                <p className="font-semibold text-base md:text-lg text-green-800 dark:text-green-200 mb-2">
                  Baseline year-2023, target year-2030, and the emissions reduction target – 42%.
                </p>
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                We confirm that the Tier 1 and Tier 2 manufacturing have set greenhouse gas emissions reduction targets in line with the criteria and recommendations of the SBTi.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Mission Content */}
        <div className="fade-in mb-12 md:mb-16">
          <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
            <div className="grid gap-6 md:gap-8 text-muted-foreground">
              <p className="text-sm md:text-base leading-relaxed">
                FAL will known as an entity whose main driven force is its human resources. Within the framework of the company, human resource plays a vital role in its success.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed">
                By the shared inner spirit of FAL Board Members & Executives the impossibilities of plans are over empowered and turns into possibilities. The seniors keep a sharing attitude across the units to ensure that each of the employees are highly motivated and engaged to see him or herself into the big picture and contributes accordingly – It is the culture of the company.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed">
                The company believes that it is not only to produce and deliver high quality, reliable safe goods and services to the clients, but also to give them the sense of trust which builds a strong bondage among us.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed">
                By the teamwork of highly inspired and skilled personnel, the company is sustaining and will prolong the vision & mission to remain for all those who are connected to it; as the source through which dreams come true. With such a motivated, highly skilled and professional workforce FAL will start marching towards its glory of success which is not the profit but to enjoy the joy of life.
              </p>
            </div>
          </div>
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
              <p className="text-blue-100 mt-1 md:mt-2 text-sm md:text-base">Showcasing our commitment to excellence</p>
            </div>
            <CardContent className="p-4 md:p-6 bg-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {[
                  "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
                  "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400"
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