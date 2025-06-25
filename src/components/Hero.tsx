
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-custom-mint via-gray-100 to-custom-pink-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Simplify Your
                <span className="text-custom-olive block">Mom Life</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Digital planners, activity books, and organizational tools designed 
                specifically for busy mothers who want to stay organized and create 
                meaningful moments with their families.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 (2,341 reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-custom-olive" />
                <span className="text-sm font-medium">10,000+ Happy Moms</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-custom-olive hover:bg-custom-olive/90 text-white">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Free Sample
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-3">
              <div className="space-y-4">
                <div className="h-4 bg-custom-mint rounded w-3/4"></div>
                <div className="h-4  rounded w-1/2"></div>
                <div className="h-4 bg-custom-pink-light rounded w-2/3"></div>
                <div className="space-y-2 pt-4">
                  <div className="h-8 bg-gray-100 rounded"></div>
                  <div className="h-8 bg-gray-100 rounded"></div>
                  <div className="h-8 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-custom-olive text-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">GH₵ 25</div>
                <div className="text-sm opacity-90">Starting from</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
