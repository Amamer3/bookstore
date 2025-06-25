
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Gift, Star, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "Welcome to our community! 🎉",
        description: "Check your email for your free welcome gift.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-custom-mint via-gray-100 to-custom-pink-light">
      <div className="container mx-auto px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-custom-mint rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-custom-olive" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                        Join Our Mom Community
                      </h3>
                      <p className="text-custom-olive font-medium">
                        Get exclusive content & special offers
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg">
                    Subscribe to our newsletter and get instant access to our free 
                    "Weekly Mom Planner" plus exclusive tips, early access to new 
                    products, and special discounts just for our community.
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Gift className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Free Welcome Gift</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Exclusive Discounts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Weekly Mom Tips</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-pink-600" />
                      </div>
                      <span className="text-sm font-medium">Community Access</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - Form */}
                <div className="space-y-6">
                  <div className="bg-custom-mint/20 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-custom-olive mb-2">
                      GH₵ 45
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Value of your free welcome gift
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-lg"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-custom-olive hover:bg-custom-olive/90 text-white h-12"
                      disabled={isLoading}
                    >
                      {isLoading ? "Subscribing..." : "Get My Free Gift"}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center">
                    No spam, ever. Unsubscribe anytime. By subscribing, you agree to our{' '}
                    <a href="#" className="underline hover:no-underline">
                      Privacy Policy
                    </a>
                  </p>

                  <div className="text-center text-sm text-muted-foreground">
                    <span className="font-medium">8,500+</span> moms already joined
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
