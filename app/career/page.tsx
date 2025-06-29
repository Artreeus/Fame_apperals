'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGraduationCap, faHandshake, faGlobe } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: faUsers,
    title: 'Team Environment',
    description: 'Work with passionate professionals in a collaborative environment'
  },
  {
    icon: faGraduationCap,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and skill development programs'
  },
  {
    icon: faHandshake,
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and comprehensive benefits'
  },
  {
    icon: faGlobe,
    title: 'Global Opportunities',
    description: 'Work with international clients and expand your global perspective'
  }
];

const openPositions = [
  {
    title: 'Production Manager',
    department: 'Manufacturing',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time'
  },
  {
    title: 'Quality Control Specialist',
    department: 'Quality Assurance',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time'
  },
  {
    title: 'Fashion Designer',
    department: 'Design',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time'
  },
  {
    title: 'Export Coordinator',
    department: 'Sales & Marketing',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time'
  }
];

export default function CareerPage() {
  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of a dynamic team that's shaping the future of garment manufacturing. 
            We offer exciting opportunities for growth and development in a global environment.
          </p>
        </div>

        {/* Why Work With Us */}
        <section className="mb-16 fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={benefit.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16 fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.type}</span>
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16 fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Fame Group, we believe that our people are our greatest asset. We foster a culture of 
                innovation, collaboration, and continuous learning. Our team members are encouraged to 
                take initiative, share ideas, and contribute to our mission of excellence in garment manufacturing.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are committed to providing a safe, inclusive, and supportive work environment where 
                everyone can thrive and reach their full potential. Our diverse team brings together 
                talents from various backgrounds to create exceptional products for our global clients.
              </p>
              <Button size="lg">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16 fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-muted-foreground text-sm">
                Submit your application through our online portal with your resume and cover letter.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview Process</h3>
              <p className="text-muted-foreground text-sm">
                Participate in our comprehensive interview process including technical and cultural fit assessments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
              <p className="text-muted-foreground text-sm">
                Welcome aboard! Begin your journey with comprehensive onboarding and training programs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact for Careers */}
        <section className="text-center bg-muted/50 rounded-2xl p-8 md:p-12 fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see a position that matches your skills? We're always looking for talented individuals 
            to join our team. Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Send Your Resume
            </Button>
            <Button size="lg" variant="outline">
              Contact HR Department
            </Button>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <div className="bg-blue-400 text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Photo Gallery</h2>
          </div>
          <div className="bg-white p-6 rounded-b-lg shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Product 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/5698842/pexels-photo-5698842.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Product 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Product 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Product 4"
                  fill
                  className="object-cover"
                />
              </div>
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