
import { Card } from '@/components/ui/card';
import { BookOpen, Calendar, GraduationCap, Heart, Home, PenTool } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 'kids',
      name: 'For Kids',
      description: 'Activity books, coloring pages, learning materials',
      icon: BookOpen,
      color: 'bg-custom-pink-light text-custom-pink',
      count: '25+ items'
    },
    {
      id: 'moms',
      name: 'For Moms',
      description: 'Self-care journals, mindfulness guides, wellness trackers',
      icon: Heart,
      color: 'bg-custom-green-light text-custom-green',
      count: '18+ items'
    },
    {
      id: 'planners',
      name: 'Planners',
      description: 'Daily, weekly, monthly planners and organizers',
      icon: Calendar,
      color: 'bg-custom-blue text-custom-olive',
      count: '32+ items'
    },
    {
      id: 'educational',
      name: 'Educational',
      description: 'Learning worksheets, educational games, study guides',
      icon: GraduationCap,
      color: 'bg-custom-mint text-custom-olive',
      count: '28+ items'
    },
    {
      id: 'home',
      name: 'Home Management',
      description: 'Cleaning schedules, meal planners, budget trackers',
      icon: Home,
      color: 'bg-custom-orange text-custom-olive',
      count: '22+ items'
    },
    {
      id: 'journals',
      name: 'Journals',
      description: 'Motherhood journals, gratitude logs, reflection guides',
      icon: PenTool,
      color: 'bg-custom-mint text-custom-green',
      count: '15+ items'
    }
  ];

  return (
    <section id="categories" className="py-16 md:py-24 bg-custom-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need with our thoughtfully organized collections designed for every aspect of motherhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary font-medium hover:text-primary/80 transition-colors">
            View All Categories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
