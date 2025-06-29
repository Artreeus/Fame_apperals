'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import Image from 'next/image';
import { Phone, Mail, MapPin, User, Building2, Fan as Fax, Camera, Play, Send, MessageSquare, Clock, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8 md:py-12">
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground mt-20">
              CONTACT US
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch with us for inquiries, partnerships, or any questions about our services
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Details */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Contact Information</h2>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <User className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm md:text-base">Contact Person</p>
                          <p className="text-muted-foreground text-sm md:text-base">Masud Alam (Kazal)</p>
                          <p className="text-muted-foreground text-xs md:text-sm">Managing Director</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm md:text-base">Mobile</p>
                          <a href="tel:+8801713042644" className="text-primary hover:underline text-sm md:text-base">
                            +88 01713 042644
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm md:text-base">Phone</p>
                          <div className="space-y-1">
                            <a href="tel:+88027672121" className="block text-primary hover:underline text-sm md:text-base">
                              +88 02 7672121
                            </a>
                            <a href="tel:+88027670400" className="block text-primary hover:underline text-sm md:text-base">
                              +88 02 7670400
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start">
                        <Fax className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm md:text-base">Fax</p>
                          <p className="text-muted-foreground text-sm md:text-base">+88 02 7672122</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm md:text-base">Email</p>
                          <a href="mailto:famefdl@gmail.com" className="text-primary hover:underline text-sm md:text-base">
                            famefdl@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm md:text-base">Business Hours</p>
                          <p className="text-muted-foreground text-sm md:text-base">Mon - Fri: 9:00 AM - 6:00 PM</p>
                          <p className="text-muted-foreground text-sm md:text-base">Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Factory Address */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Factory Address</h2>
                </div>
                
                <div className="flex items-start">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      Plot-A-115/116, BSCIC, I/A, Fatullah<br />
                      Narayanganj, Bangladesh
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card className="fade-in hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <Globe className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Location</h2>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
                  <div className="aspect-video flex items-center justify-center p-6 md:p-8">
                    <div className="text-center">
                      <div className="p-3 md:p-4 bg-blue-200 dark:bg-blue-800 rounded-full w-fit mx-auto mb-3 md:mb-4">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div className="text-lg md:text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Factory Location</div>
                      <div className="text-sm md:text-base text-blue-700 dark:text-blue-300 mb-1">Plot-A-115/116, BSCIC, I/A, Fatullah</div>
                      <div className="text-sm md:text-base text-blue-700 dark:text-blue-300 mb-4">Narayanganj, Bangladesh</div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-blue-300 text-blue-700 hover:bg-blue-100 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30"
                        onClick={() => window.open('https://maps.google.com/?q=Plot-A-115/116,BSCIC,I/A,Fatullah,Narayanganj,Bangladesh', '_blank')}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full mr-3 md:mr-4">
                    <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Send us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium mb-2 text-foreground">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium mb-2 text-foreground">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm md:text-base font-medium mb-2 text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter message subject"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm md:text-base font-medium mb-2 text-foreground">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none"
                      placeholder="Enter your message here..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-sm md:text-base font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
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