
import { useState } from 'react';
import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    'For Kids',
    'For Moms', 
    'Planners',
    'Educational',
    'Home Management',
    'Journals'
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary fill-current" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Mama's Printables
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Shop All
            </a>
            <a href="#categories" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#featured" className="text-sm font-medium hover:text-primary transition-colors">
              Featured
            </a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden sm:flex"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 pt-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary fill-current" />
                    <span className="font-serif text-lg font-semibold">
                      Mama's Printables
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                      Shop
                    </h3>
                    <div className="space-y-3">
                      <a href="#" className="block text-sm hover:text-primary transition-colors">
                        Shop All
                      </a>
                      <a href="#featured" className="block text-sm hover:text-primary transition-colors">
                        Featured Products
                      </a>
                      <a href="#blog" className="block text-sm hover:text-primary transition-colors">
                        Blog & Tips
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                      Categories
                    </h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <a 
                          key={category}
                          href={`#${category.toLowerCase().replace(' ', '-')}`}
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button className="w-full">
                      Sign In / Register
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for planners, activities, journals..."
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
