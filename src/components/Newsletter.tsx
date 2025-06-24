
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Welcome to our community! 💕",
      description: "You'll receive our best parenting tips and new product updates.",
    });
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-custom-mint via-custom-orange to-custom-pink-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-custom-white rounded-full mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Mom Community
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get weekly parenting tips, exclusive printables, and be the first to know about new releases. 
            Join over 10,000 moms who love what we create! ✨
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-custom-white border-primary/20 focus:border-primary"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8">
              <Heart className="h-4 w-4 mr-2" />
              Join Now
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            No spam, ever. Unsubscribe anytime with just one click.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-4 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>10,000+ subscribers</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span>Weekly updates</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span>Free resources</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
