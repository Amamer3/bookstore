
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Search, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Creating Morning Routines That Actually Work for Busy Moms',
      excerpt: 'Discover practical tips for establishing morning routines that fit into your hectic schedule and set a positive tone for the day.',
      content: 'Full blog post content would go here...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Parenting Tips',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'DIY Educational Activities Using Our Printables',
      excerpt: 'Transform our printable resources into engaging learning activities that will keep your kids entertained and educated.',
      content: 'Full blog post content would go here...',
      author: 'Emily Davis',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Education',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Organization Hacks Every Mom Should Know',
      excerpt: 'Simple yet effective organization strategies to help you maintain a tidy home while managing family life.',
      content: 'Full blog post content would go here...',
      author: 'Jessica Brown',
      date: '2024-01-10',
      readTime: '4 min read',
      category: 'Organization',
      image: '/placeholder.svg'
    },
    {
      id: '4',
      title: 'Self-Care Ideas That Take Less Than 15 Minutes',
      excerpt: 'Quick self-care practices that busy moms can easily incorporate into their daily routine for better mental health.',
      content: 'Full blog post content would go here...',
      author: 'Amanda Wilson',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Self-Care',
      image: '/placeholder.svg'
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-custom-mint via-gray-100 to-custom-pink-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mom Life Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Tips, tricks, and inspiration for modern motherhood
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 ">
            <Card className="bg-slate-100">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 bg-slate-100 text-black">
                 <Button
                   variant={selectedCategory === null ? "default" : "ghost"}
                   className="w-full justify-start"
                   onClick={() => setSelectedCategory(null)}
                 >
                   All Categories
                 </Button>
                 {categories.map(category => (
                   <Button
                     key={category}
                     variant={selectedCategory === category ? "default" : "ghost"}
                     className="w-full justify-start"
                     onClick={() => setSelectedCategory(category)}
                   >
                     {category}
                   </Button>
                 ))}
               </CardContent>
            </Card>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map(post => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow bg-white ">
                  <div className="aspect-video bg-custom-mint rounded-t-lg"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-serif hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground ">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
