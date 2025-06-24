
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Heart, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary to-accent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Trusted by 10,000+ moms</span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Beautiful Printables for
            <span className="text-gradient block">Modern Moms</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Discover thoughtfully designed planners, activity books, educational materials, and journals that make motherhood more organized and joyful.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base">
              Browse Categories
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Instant Download</h3>
              <p className="text-sm text-muted-foreground">Get your printables immediately after purchase</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Made with Love</h3>
              <p className="text-sm text-muted-foreground">Designed by moms, for moms with care and attention</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">High-resolution, print-ready designs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
