
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Download, Heart, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  image: string;
  bestseller?: boolean;
  new?: boolean;
}

const FeaturedProducts = () => {
  const { toast } = useToast();
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const products: Product[] = [
    {
      id: '1',
      title: 'Ultimate Mom Planner 2024',
      description: 'Complete daily, weekly, and monthly planning system designed for busy mothers',
      price: 45,
      originalPrice: 65,
      rating: 4.9,
      reviewCount: 234,
      category: 'Planners',
      image: '/placeholder.svg',
      bestseller: true
    },
    {
      id: '2',
      title: 'Kids Learning Activity Pack',
      description: '50+ printable activities for children ages 3-8. Educational and fun!',
      price: 25,
      rating: 4.8,
      reviewCount: 156,
      category: 'Activities',
      image: '/placeholder.svg',
      new: true
    },
    {
      id: '3',
      title: 'Family Meal Planning Kit',
      description: 'Weekly meal planners, grocery lists, and recipe cards all in one package',
      price: 35,
      originalPrice: 50,
      rating: 4.7,
      reviewCount: 89,
      category: 'Organization',
      image: '/placeholder.svg'
    },
    {
      id: '4',
      title: 'Self-Care Tracker Bundle',
      description: 'Track your wellness journey with beautiful habit trackers and journals',
      price: 30,
      rating: 4.9,
      reviewCount: 178,
      category: 'Self-Care',
      image: '/placeholder.svg',
      bestseller: true
    },
    {
      id: '5',
      title: 'Morning Routine Checklist',
      description: 'Start your day right with structured morning routine templates',
      price: 20,
      rating: 4.6,
      reviewCount: 67,
      category: 'Routines',
      image: '/placeholder.svg'
    },
    {
      id: '6',
      title: 'Baby Milestone Tracker',
      description: 'Beautiful templates to track and celebrate your baby\'s first year',
      price: 28,
      rating: 4.8,
      reviewCount: 145,
      category: 'Baby',
      image: '/placeholder.svg',
      new: true
    }
  ];

  const toggleLike = (productId: string) => {
    const newLikedProducts = new Set(likedProducts);
    if (newLikedProducts.has(productId)) {
      newLikedProducts.delete(productId);
    } else {
      newLikedProducts.add(productId);
    }
    setLikedProducts(newLikedProducts);
  };

  const addToCart = (product: Product) => {
    toast({
      title: "Added to cart! 🛒",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most popular digital products loved by thousands of moms worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-shadow relative bg-white">
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.bestseller && (
                  <Badge className="bg-custom-olive text-white">Bestseller</Badge>
                )}
                {product.new && (
                  <Badge className="bg-blue-500 text-white">New</Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">
                    Save GH₵ {product.originalPrice - product.price}
                  </Badge>
                )}
              </div>

              {/* Like Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 w-8 h-8 p-0"
                onClick={() => toggleLike(product.id)}
              >
                <Heart 
                  className={`h-4 w-4 ${
                    likedProducts.has(product.id) 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-400'
                  }`} 
                />
              </Button>

              {/* Product Image */}
              <div className="aspect-square bg-custom-mint rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-custom-mint to-gray-100 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Download className="h-12 w-12 text-custom-olive" />
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-pink-400 text-pink-400 mr-1" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-custom-olive transition-colors">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-custom-olive">
                      GH₵ {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        GH₵ {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-custom-olive hover:bg-custom-olive/90"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="default">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
