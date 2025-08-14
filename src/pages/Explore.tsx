import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, TrendingUp, Globe, Code, Rocket, Users, Bot, Sparkles, Star } from "lucide-react";

const Explore = () => {
  const trendingProjects = [
    {
      title: "CircleLayer Builder Hub",
      description: "Your Gateway to Building on CircleLayer Network",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      badge: "Builder Tools",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      title: "AI Node Assistant",
      description: "Another Step Towards Our 2025 Vision",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      badge: "AI Innovation",
      color: "bg-gradient-to-br from-blue-600 to-purple-600"
    },
    {
      title: "Lightning Fast Consensus",
      description: "CircleLayer Moves to 0.5-Second Block Times",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      badge: "Network Update",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    }
  ];

  const ecosystemProjects = [
    {
      title: "DeFi Protocol",
      description: "Next-generation decentralized finance",
      category: "Finance",
      users: "2.5M+"
    },
    {
      title: "NFT Marketplace",
      description: "Digital collectibles and assets",
      category: "NFTs",
      users: "1.8M+"
    },
    {
      title: "Gaming Platform",
      description: "Play-to-earn blockchain games",
      category: "Gaming",
      users: "3.2M+"
    },
    {
      title: "Social Network",
      description: "Decentralized social platform",
      category: "Social",
      users: "950K+"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Speed",
      description: "Ultra-fast transaction processing with 0.5s block times"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Maximum Security",
      description: "Enterprise-grade security with MEV protection"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Worldwide node distribution for optimal performance"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer Friendly",
      description: "Comprehensive tools and documentation for builders"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[url('/src/assets/pattern-bg.jpg')] opacity-10 animate-pulse" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-32 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-[float_8s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-[float_7s_ease-in-out_infinite]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Enhanced title with gradient text and sparkle effects */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-bold animate-fade-in">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-pulse">
                AI-First.
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                Low Latency.
              </span>
              <br />
              <span className="text-foreground relative">
                All in One Network.
                <Sparkles className="absolute -top-2 -right-8 w-8 h-8 text-primary animate-pulse" />
              </span>
            </h1>
            
            {/* Floating stars */}
            <Star className="absolute top-10 left-20 w-6 h-6 text-primary/50 animate-[float_4s_ease-in-out_infinite]" />
            <Star className="absolute top-20 right-16 w-4 h-4 text-secondary/50 animate-[float_5s_ease-in-out_infinite_reverse]" />
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Experience the future of blockchain with CircleLayer's revolutionary network architecture
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-500">
            <Button variant="hero" size="lg" className="text-lg px-8 group hover-scale">
              Quick Start 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 hover-scale">
              Get CIRCLE
            </Button>
          </div>
          
          {/* Enhanced AI Search Bar */}
          <div className="max-w-2xl mx-auto animate-fade-in animation-delay-700">
            <div className="relative bg-card/70 backdrop-blur-xl border border-primary/20 rounded-full p-6 shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-full" />
              <input 
                type="text" 
                placeholder="How to deploy a smart contract on CircleLayer?" 
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg relative z-10"
              />
              <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full z-10 glow">
                <Bot className="w-4 h-4 mr-2" />
                Ask AI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Trends Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl">🔥</span>
              <h2 className="text-4xl font-bold">Top Trends & Breaking News: Stay Ahead in Web3!</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingProjects.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden border-0 bg-gradient-to-b from-card/50 to-card/80 backdrop-blur-sm">
                <div className={`h-48 ${project.color} relative overflow-hidden`}>
                  {/* Gradient overlay for better image effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-black/70 text-white backdrop-blur-sm z-20 hover-scale">
                    {project.badge}
                  </Badge>
                  
                  {/* Floating sparkle effect */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <Sparkles className="w-6 h-6 text-white animate-pulse" />
                  </div>
                </div>
                <CardHeader className="relative">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 relative z-10">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base relative z-10">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose CircleLayer?</h2>
            <p className="text-xl text-muted-foreground">Built for the next generation of decentralized applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover-scale border-0 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Web3 Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Web3 Projects You Can Learn From</h2>
            <p className="text-xl text-muted-foreground">Discover successful projects built on CircleLayer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer hover-scale border-0 bg-gradient-to-b from-card/70 to-card/30 backdrop-blur-sm">
                <CardHeader className="relative">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <Badge variant="secondary" className="group-hover:bg-primary/20 transition-colors duration-300">{project.category}</Badge>
                    <Users className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 relative z-10">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="relative z-10">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-sm text-muted-foreground">{project.users} users</span>
                    <TrendingUp className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers building on CircleLayer Network
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Rocket className="mr-2 w-5 h-5" />
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Explore;