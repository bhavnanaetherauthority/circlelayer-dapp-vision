import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, TrendingUp, Globe, Code, Rocket, Users, Bot } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[url('/src/assets/pattern-bg.jpg')] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-primary">AI-First.</span>
            <br />
            <span className="text-yellow-400">Low Latency.</span>
            <br />
            <span className="text-foreground">All in One Network.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the future of blockchain with CircleLayer's revolutionary network architecture
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="default" size="lg" className="text-lg px-8">
              Quick Start <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Get CIRCLE
            </Button>
          </div>
          
          {/* AI Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-card/50 backdrop-blur border rounded-full p-6">
              <input 
                type="text" 
                placeholder="How to deploy a smart contract on CircleLayer?" 
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
              />
              <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">
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
              <Card key={index} className="group cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className={`h-48 ${project.color} relative`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <Badge className="absolute top-4 left-4 bg-black/50 text-white">
                    {project.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
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
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Users className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{project.users} users</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
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