'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { 
  Building2, 
  Target, 
  Users, 
  Shield, 
  Factory, 
  Truck, 
  CreditCard, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  Camera,
  Play,
  Globe,
  Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProfilePage() {
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
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground mt-20">
              ABOUT US
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Leading manufacturer & exporter of premium knitted garments since 2001
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Product Showcase */}
          <div className="lg:col-span-1 fade-in">
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

          {/* Company Information */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Company Scope */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">The Scope Of The Company</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  We are manufacturer & exporter of full range of knitted garments for men ladies, kids and any kinds of knitted items.
                </p>
              </CardContent>
            </Card>

            {/* Quality Policy */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Quality Policy</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                  Fame Apparels Limited is a knitted fabric & Garments manufacturing company with a mission to be one of the leading exporters in providing the quality knitted garments from Bangladesh to various customers around the globe.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                  In order to achieve the mission, Fame Apparels Limited is committed to:
                </p>
                <div className="space-y-2 md:space-y-3">
                  {[
                    'Produce high quality products, by implementing company-wide standards.',
                    'Customer satisfaction',
                    'On time delivery to customers by planning every shipment',
                    'To decrease the percentage (%) of rework',
                    'Evaluate the supplier on yearly basis',
                    'Give safe and health working environment to workers'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start text-muted-foreground">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Policy */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Social Policy</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Fame Apparels Limited is committed to the best human workplace practices. Our goal is to continuously improve our human resource policy and procedures through education, training, communication, and employee's involvement.
                </p>
              </CardContent>
            </Card>

            {/* Company Summary */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-blue-200 dark:bg-blue-800 rounded-full mr-3 md:mr-4">
                    <Factory className="w-6 h-6 md:w-8 md:h-8 text-blue-700 dark:text-blue-300" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-200">Company Summary</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Building2 className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-blue-800 dark:text-blue-200">Business Type:</span>
                        <p className="text-blue-700 dark:text-blue-300">Manufacturer and Exporter</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-blue-800 dark:text-blue-200">Factory Location:</span>
                        <p className="text-blue-700 dark:text-blue-300">Plot-A-115/116,BSCIC, I/A, Fatullah, Narayanganj, Bangladesh</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-blue-800 dark:text-blue-200">Year of Establishment:</span>
                        <p className="text-blue-700 dark:text-blue-300">2001</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-blue-800 dark:text-blue-200">Source of Raw Materials:</span>
                        <p className="text-blue-700 dark:text-blue-300">We can import all kinds of Raw Materials from home & abroad</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Factory className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-blue-800 dark:text-blue-200">Factory Floor Space:</span>
                        <p className="text-blue-700 dark:text-blue-300">63,000 square feet (09 Floor)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Factory Machineries */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Factory className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Factory Machineries</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base text-muted-foreground">
                  <div className="space-y-2">
                    <p>01. Cutting machine 05 set</p>
                    <p>02. Over lock 168 set</p>
                    <p>03. Lock</p>
                    <p className="ml-4">a) Cylinder bed lock 59 set</p>
                    <p className="ml-4">b) Flat bed 22 set</p>
                    <p className="ml-4">c) Back Tape 04 set</p>
                    <p>04. Plain machine 161 set</p>
                    <p>05. Button hole 01 set</p>
                    <p>06. Button Stitch Machine 07 set</p>
                    <p>07. Stain removal 03 set</p>
                    <p>08. Rib Cutter 08 set</p>
                    <p>10. Thread Sucker 02 set</p>
                    <p>11. Steam Boiler 02 set</p>
                    <p>12. Needle Detector 01 set</p>
                  </div>
                  <div className="space-y-2">
                    <p>13. Circular Knitting Machine Fukuhara Japan 15 sets</p>
                    <p>We have already opened LC for Laky Taiwan 11 sets which will be arrived shortly</p>
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Production Capacity:</p>
                      <p>Basic T-shirt 30,000 pcs per day</p>
                      <p>Polo and stylish 15,000 pcs per day</p>
                    </div>
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Work Force:</p>
                      <p>Worker (Male) – 550</p>
                      <p>Worker (Female) – 650</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Main Market */}
              <Card className="fade-in hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Main Market</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Netherlands, Germany, Spain, France Italy & UK
                  </p>
                </CardContent>
              </Card>

              {/* Payment Mode */}
              <Card className="fade-in hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Payment Mode</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Confirmed Irrevocable Letter of Credit
                  </p>
                </CardContent>
              </Card>

              {/* Delivery */}
              <Card className="fade-in hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <Truck className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Delivery</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Generally 90 days from L/C opening date
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="fade-in hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Contact Information</h3>
                  </div>
                  <div className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <p><span className="font-semibold text-foreground">Contact Person:</span> Masud Alam (Kazal)</p>
                    <p><span className="font-semibold text-foreground">Managing Director</span></p>
                    <p><span className="font-semibold text-foreground">Mobile:</span> + 88 01713 042644</p>
                    <p><span className="font-semibold text-foreground">Phone:</span> + 88 02 7672121, 7670400</p>
                    <p><span className="font-semibold text-foreground">Fax:</span> + 88 02 7672122</p>
                    <p>
                      <span className="font-semibold text-foreground">Email:</span> 
                      <a href="mailto:famefdl@gmail.com" className="text-primary hover:underline ml-1">
                        famefdl@gmail.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bank Information */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Bank</h2>
                </div>
                <div className="text-sm md:text-base text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">AB Bank Limited</p>
                  <p>Narayanganj Branch</p>
                  <p>109, B.B. Road, Narayanganj, Bangladesh</p>
                  <p><span className="font-semibold text-foreground">Swift:</span> ABBLBDDHXXX</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="mt-12 md:mt-16 fade-in">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-400 dark:bg-blue-600 text-white p-4 md:p-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
                <div className="p-2 bg-white/20 rounded-lg mr-3 md:mr-4">
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

        {/* Photo Gallery Section */}
        <div className="mt-8 md:mt-12 fade-in">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-400 dark:bg-blue-600 text-white p-4 md:p-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center">
                <div className="p-2 bg-white/20 rounded-lg mr-3 md:mr-4">
                  <Camera className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                Photo Gallery
              </h2>
              <p className="text-blue-100 mt-1 md:mt-2 text-sm md:text-base">Showcasing our manufacturing excellence</p>
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