
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  BookOpen, 
  Users, 
  Heart, 
  Coffee, 
  Baby,
  ArrowRight 
} from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 'planners',
      title: 'Daily Planners',
      description: 'Organize your busy mom life with our beautiful digital planners',
      icon: Calendar,
      color: 'bg-custom-mint',
      itemCount: 12,
      startingPrice: 35
    },
    {
      id: 'activities',
      title: 'Kids Activities',
      description: 'Engaging printable activities to keep your little ones busy',
      icon: BookOpen,
      color: 'bg-gray-100',
      itemCount: 25,
      startingPrice: 15
    },
    {
      id: 'family',
      title: 'Family Organization',
      description: 'Tools to keep your whole family organized and connected',
      icon: Users,
      color: 'bg-custom-pink-light',
      itemCount: 8,
      startingPrice: 20
    },
    {
      id: 'selfcare',
      title: 'Self-Care',
      description: 'Take care of yourself with our wellness and self-care resources',
      icon: Heart,
      color: 'bg-purple-100',
      itemCount: 15,
      startingPrice: 25
    },
    {
      id: 'morning',
      title: 'Morning Routines',
      description: 'Start your day right with structured morning routine guides',
      icon: Coffee,
      color: 'bg-pink-100',
      itemCount: 6,
      startingPrice: 18
    },
    {
      id: 'baby',
      title: 'Baby Care',
      description: 'Track and organize everything for your little bundle of joy',
      icon: Baby,
      color: 'bg-pink-100',
      itemCount: 10,
      startingPrice: 22
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-custom-mint via-gray-50 to-custom-pink-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need to simplify and organize your mom life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="hover:shadow-lg transition-shadow group bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-gray-700" />
                    </div>
                    <Badge variant="secondary">{category.itemCount} items</Badge>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Starting from{' '}
                      <span className="font-semibold text-custom-olive">
                        GH₵ {category.startingPrice}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-custom-mint">
                      Browse
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="default">
            View All Categories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
