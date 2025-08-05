import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-network.jpg";
import patternBg from "@/assets/pattern-bg.jpg";
import { StatsOverview } from "@/components/StatsOverview";
import { NodeCard } from "@/components/NodeCard";
import { NetworkMap } from "@/components/NetworkMap";
import { RecentActivity } from "@/components/RecentActivity";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Plus,
  ArrowUpRight,
  TrendingUp
} from "lucide-react";

// Sample node data
const sampleNodes = [
  {
    id: "node-1",
    name: "NA-East-1",
    status: "online" as const,
    location: "New York, USA",
    uptime: 99.8,
    performance: 94,
    memoryUsage: 72,
    cpuUsage: 45,
    diskUsage: 58,
    latency: 12,
    peers: 847,
    blockHeight: 2847392,
    version: "v1.2.4"
  },
  {
    id: "node-2",
    name: "EU-West-3",
    status: "syncing" as const,
    location: "Frankfurt, Germany",
    uptime: 98.2,
    performance: 89,
    memoryUsage: 84,
    cpuUsage: 67,
    diskUsage: 43,
    latency: 8,
    peers: 923,
    blockHeight: 2847385,
    version: "v1.2.4"
  },
  {
    id: "node-3",
    name: "AP-Southeast-1",
    status: "online" as const,
    location: "Singapore",
    uptime: 99.9,
    performance: 97,
    memoryUsage: 68,
    cpuUsage: 38,
    diskUsage: 51,
    latency: 24,
    peers: 756,
    blockHeight: 2847392,
    version: "v1.2.4"
  },
  {
    id: "node-4",
    name: "SA-East-1",
    status: "degraded" as const,
    location: "São Paulo, Brazil",
    uptime: 94.3,
    performance: 76,
    memoryUsage: 89,
    cpuUsage: 78,
    diskUsage: 67,
    latency: 145,
    peers: 432,
    blockHeight: 2847340,
    version: "v1.2.3"
  },
  {
    id: "node-5",
    name: "EU-North-1",
    status: "offline" as const,
    location: "Stockholm, Sweden",
    uptime: 0,
    performance: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    diskUsage: 0,
    latency: 0,
    peers: 0,
    blockHeight: 2847201,
    version: "v1.2.4"
  },
  {
    id: "node-6",
    name: "NA-West-2",
    status: "online" as const,
    location: "Los Angeles, USA",
    uptime: 99.7,
    performance: 92,
    memoryUsage: 75,
    cpuUsage: 52,
    diskUsage: 61,
    latency: 18,
    peers: 834,
    blockHeight: 2847392,
    version: "v1.2.4"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-surface/50 to-surface/30 backdrop-blur-xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-glow opacity-40 blur-3xl animate-pulse"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${patternBg})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/95"></div>
          <div className="relative text-center py-24 px-8">
            {/* Floating particles */}
            <div className="absolute top-16 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-float"></div>
            <div className="absolute top-32 right-1/3 w-1 h-1 bg-primary-glow/80 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-slide-up">
              <span className="gradient-text animate-glow-pulse drop-shadow-lg">CircleLayer</span>
              <br />
              <span className="text-foreground/90">Node Network</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-stagger-fade-1 leading-relaxed">
              Decentralized infrastructure powering the future of Web3. 
              Monitor, manage, and scale your blockchain nodes with confidence and precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-stagger-fade-2">
              <Button variant="hero" size="hero" className="animate-glow hover:animate-float transition-all duration-500 shadow-glow">
                <Plus className="h-5 w-5 mr-2" />
                Deploy Node
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <TrendingUp className="h-5 w-5 mr-2" />
                View Analytics
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 mt-12 animate-stagger-fade-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,247</div>
                <div className="text-sm text-muted-foreground">Active Nodes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <section className="mb-12 animate-stagger-fade-3">
          <StatsOverview />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 animate-stagger-fade-4">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Network Map */}
          <div className="lg:col-span-2">
            <NetworkMap />
          </div>
          
          {/* Recent Activity */}
          <div>
            <RecentActivity />
          </div>
        </div>

        {/* Nodes Section */}
        <section className="relative">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 -z-10">
            <div 
              className="absolute inset-0 opacity-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${patternBg})` }}
            ></div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Active Nodes</h2>
              <p className="text-muted-foreground">
                Monitoring {sampleNodes.length} nodes across global regions
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search nodes..." 
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="default">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="default">
                <Plus className="h-4 w-4 mr-2" />
                Add Node
              </Button>
            </div>
          </div>

          {/* Node Status Summary */}
          <div className="flex items-center space-x-6 mb-6">
            <Badge variant="outline" className="border-success text-success bg-success/10">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              {sampleNodes.filter(n => n.status === 'online').length} Online
            </Badge>
            <Badge variant="outline" className="border-node-syncing text-node-syncing bg-node-syncing/10">
              <div className="w-2 h-2 bg-node-syncing rounded-full mr-2"></div>
              {sampleNodes.filter(n => n.status === 'syncing').length} Syncing
            </Badge>
            <Badge variant="outline" className="border-node-degraded text-node-degraded bg-node-degraded/10">
              <div className="w-2 h-2 bg-node-degraded rounded-full mr-2"></div>
              {sampleNodes.filter(n => n.status === 'degraded').length} Degraded
            </Badge>
            <Badge variant="outline" className="border-destructive text-destructive bg-destructive/10">
              <div className="w-2 h-2 bg-destructive rounded-full mr-2"></div>
              {sampleNodes.filter(n => n.status === 'offline').length} Offline
            </Badge>
          </div>

          {/* Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sampleNodes.map((node) => (
              <NodeCard key={node.id} node={node} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
