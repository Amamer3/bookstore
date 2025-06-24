
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  Download,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-custom-mint rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 text-custom-olive" />
              </div>
              <span className="font-serif text-xl font-bold">
                MomLife Store
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering mothers with digital tools and resources to simplify 
              their daily lives and create meaningful moments with their families.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-custom-mint">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-custom-mint">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-custom-mint">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-custom-mint">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Home
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                All Products
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Blog
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/category/planners" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Daily Planners
              </Link>
              <Link to="/category/activities" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Kids Activities
              </Link>
              <Link to="/category/organization" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Organization Tools
              </Link>
              <Link to="/category/self-care" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Self-Care Resources
              </Link>
              <Link to="/category/baby" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Baby & Pregnancy
              </Link>
            </nav>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-custom-mint" />
                <span className="text-gray-300 text-sm">support@momlifestore.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-custom-mint" />
                <span className="text-gray-300 text-sm">+233 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-custom-mint" />
                <span className="text-gray-300 text-sm">Accra, Ghana</span>
              </div>
            </div>
            <nav className="flex flex-col space-y-2 pt-2">
              <Link to="/help" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Help Center
              </Link>
              <Link to="/returns" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Returns & Refunds
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-custom-mint transition-colors text-sm">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Trust Indicators */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Download className="h-6 w-6 text-custom-mint" />
            <div>
              <div className="font-semibold text-sm">Instant Download</div>
              <div className="text-xs text-gray-400">Get your products immediately</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Shield className="h-6 w-6 text-custom-mint" />
            <div>
              <div className="font-semibold text-sm">Secure Payment</div>
              <div className="text-xs text-gray-400">Your data is protected</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Heart className="h-6 w-6 text-custom-mint" />
            <div>
              <div className="font-semibold text-sm">30-Day Guarantee</div>
              <div className="text-xs text-gray-400">Love it or get your money back</div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} MomLife Store. All rights reserved. Made with ❤️ for amazing moms.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">We accept:</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
                VISA
              </div>
              <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center text-white font-bold">
                MC
              </div>
              <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center text-white">
                <CreditCard className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
