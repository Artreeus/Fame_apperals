'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '@/components/hero';
import { FeaturedProducts } from '@/components/featured-products';
import { Categories } from '@/components/categories';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import { Newsletter } from '@/components/newsletter';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
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

    // Parallax effect for hero section
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Services />
      <Testimonials />
      <Newsletter />
    </>
  );
}