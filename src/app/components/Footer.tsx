import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
    { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Your Company Name</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              We are dedicated to providing exceptional service and support to our clients. 
              Contact us today to learn how we can help you achieve your goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  contact@company.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  123 Business Street<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Your Company Name. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}