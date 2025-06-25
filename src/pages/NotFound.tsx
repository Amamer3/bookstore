
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Search, Heart } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-custom-mint via-gray-100 to-custom-pink-light flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center space-y-6">
          {/* Icon */}
          <div className="w-20 h-20 bg-custom-mint rounded-full flex items-center justify-center mx-auto">
            <Heart className="h-10 w-10 text-custom-olive" />
          </div>

          {/* Error Code */}
          <div>
            <h1 className="text-6xl font-bold text-custom-olive mb-2">404</h1>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Page Not Found
            </h2>
            <p className="text-muted-foreground">
              Oops! The page you're looking for seems to have wandered off. 
              Don't worry, even busy moms lose track of things sometimes!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link to="/" className="block">
              <Button className="w-full bg-custom-olive hover:bg-custom-olive/90">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">
              Looking for something specific?
            </p>
            <div className="flex flex-col space-y-2">
              <Link to="/blog" className="text-sm text-custom-olive hover:underline">
                Browse our Blog
              </Link>
              <Link to="/cart" className="text-sm text-custom-olive hover:underline">
                Check your Cart
              </Link>
              <Link to="/login" className="text-sm text-custom-olive hover:underline">
                Sign In to your Account
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
