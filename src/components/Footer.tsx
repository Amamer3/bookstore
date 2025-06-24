
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-olive text-custom-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-custom-pink fill-current" />
              <span className="font-serif text-xl font-semibold">
                Mama's Printables
              </span>
            </div>
            <p className="text-sm text-custom-white/80 leading-relaxed">
              Beautiful, functional printables designed by moms, for moms. 
              Making motherhood more organized and joyful, one printable at a time.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-custom-white/80 hover:text-custom-white hover:bg-custom-white/10">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">Shop All</a></li>
              <li><a href="#categories" className="text-custom-white/80 hover:text-custom-white transition-colors">Categories</a></li>
              <li><a href="#featured" className="text-custom-white/80 hover:text-custom-white transition-colors">Featured</a></li>
              <li><a href="#blog" className="text-custom-white/80 hover:text-custom-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">For Kids</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">For Moms</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">Planners</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">Educational</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">Home Management</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">My Account</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">Download Issues</a></li>
              <li><a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors">Refund Policy</a></li>
            </ul>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-custom-white/80">
                <Mail className="h-4 w-4" />
                <span>support@mamasprintables.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-custom-white/80">
                <Phone className="h-4 w-4" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-custom-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-custom-white/80">
            © {currentYear} Mama's Printables. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-custom-white/80 hover:text-custom-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-custom-white/80 hover:text-custom-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-custom-white/80 hover:text-custom-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
