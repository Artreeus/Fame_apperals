'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  Building2,
  Home,
  Users,
  Target,
  User,
  Briefcase
} from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Welcome to Fame Group', icon: Home },
  { href: '/about', label: 'About Us', icon: Building2 },
  { href: '/career', label: 'Career', icon: Briefcase },
  { href: '/our-clients', label: 'Our Clients', icon: Users },
  { href: '/our-mission', label: 'Our Mission', icon: Target },
  { href: '/profile', label: 'Profile', icon: User },
];

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    color: 'text-green-400',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@famegroup.com', 'sales@famegroup.com'],
    color: 'text-blue-400',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Manufacturing St.', 'Industrial District, NY 10001'],
    color: 'text-red-400',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
    color: 'text-purple-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      phone: '', 
      subject: '', 
      message: '', 
      newsletter: false 
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your garment ideas to life? Contact our expert team for custom manufacturing solutions, 
            bulk orders, or partnership opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Quick Navigation */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-xl border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Building2 className="h-6 w-6" />
                  Quick Navigation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10 p-6">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-300 group border border-gray-600/30 hover:border-gray-500/50"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <link.icon className="h-5 w-5 text-red-400 group-hover:text-red-300 transition-colors" />
                    <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="shadow-xl border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Send className="h-6 w-6" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 border-2 border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-gray-700 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 border-2 border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-gray-700 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-12 border-2 border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-gray-700 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 border-2 border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-gray-700 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-12 border-2 border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-gray-700 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project, requirements, or questions..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="border-2 border-gray-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:bg-gray-700 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-300">
                      Subscribe to our newsletter for industry updates and exclusive offers
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Send Message
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
              >
                <div className={`inline-flex p-3 rounded-full bg-gray-700/50 ${info.color} mb-4`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl text-white relative overflow-hidden border border-gray-600/30"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join over 100+ satisfied clients who trust Fame Group for their garment manufacturing needs.
            </p>
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}