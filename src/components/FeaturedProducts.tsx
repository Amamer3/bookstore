
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Heart, Star } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Ultimate Mom Planner 2024",
      description: "Complete daily, weekly, and monthly planning system designed specifically for busy moms.",
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviews: 234,
      image: "/api/placeholder/300/400",
      category: "Planners",
      badge: "Bestseller",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Kids Activity Book Bundle",
      description: "50+ fun activities, coloring pages, and educational games to keep kids engaged for hours.",
      price: 14.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 189,
      image: "/api/placeholder/300/400",
      category: "For Kids",
      badge: "New",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "Mindful Motherhood Journal",
      description: "Daily prompts for reflection, gratitude, and personal growth during your parenting journey.",
      price: 12.99,
      originalPrice: 18.99,
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/300/400",
      category: "Journals",
      badge: "Popular",
      badgeColor: "bg-purple-500"
    },
    {
      id: 4,
      name: "Home Organization Kit",
      description: "Complete set of cleaning schedules, meal planners, and budget trackers for organized living.",
      price: 16.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 98,
      image: "/api/placeholder/300/400",
      category: "Home Management",
      badge: null,
      badgeColor: ""
    }
  ];

  return (
    <section id="featured" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved printables, carefully crafted to make your daily life easier and more beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Preview Image</p>
                  </div>
                </div>
                
                {product.badge && (
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                )}
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white text-sm">
                  <Download className="h-3 w-3 mr-2" />
                  Buy & Download
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
