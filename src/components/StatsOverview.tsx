import { Card } from "@/components/ui/card";
import { 
  Server, 
  Activity, 
  Users, 
  Zap,
  TrendingUp,
  TrendingDown,
  Minus,
  Globe,
  Shield,
  Clock,
  Database
} from "lucide-react";

const stats = [
  {
    title: "Total Nodes",
    value: "1,247",
    change: "+12",
    changeType: "increase" as const,
    icon: Server,
    description: "Active nodes in network"
  },
  {
    title: "Network Uptime",
    value: "99.97%",
    change: "+0.02%",
    changeType: "increase" as const,
    icon: Activity,
    description: "Last 30 days average"
  },
  {
    title: "Connected Validators",
    value: "847",
    change: "-3",
    changeType: "decrease" as const,
    icon: Users,
    description: "Validators currently online"
  },
  {
    title: "Network Performance",
    value: "98.4%",
    change: "0%",
    changeType: "neutral" as const,
    icon: Zap,
    description: "Real-time performance score"
  },
  {
    title: "Global Reach",
    value: "142",
    change: "+8",
    changeType: "increase" as const,
    icon: Globe,
    description: "Countries with active nodes"
  },
  {
    title: "Security Score",
    value: "99.2%",
    change: "+0.1%",
    changeType: "increase" as const,
    icon: Shield,
    description: "Network security rating"
  },
  {
    title: "Avg Block Time",
    value: "2.3s",
    change: "-0.2s",
    changeType: "increase" as const,
    icon: Clock,
    description: "Average block confirmation"
  },
  {
    title: "Data Throughput",
    value: "47.8 MB/s",
    change: "+5.2 MB/s",
    changeType: "increase" as const,
    icon: Database,
    description: "Network data processing"
  }
];

const getChangeIcon = (type: string) => {
  switch (type) {
    case 'increase': return TrendingUp;
    case 'decrease': return TrendingDown;
    default: return Minus;
  }
};

const getChangeColor = (type: string) => {
  switch (type) {
    case 'increase': return 'text-success';
    case 'decrease': return 'text-destructive';
    default: return 'text-muted-foreground';
  }
};

export const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const ChangeIcon = getChangeIcon(stat.changeType);
        
        return (
          <Card key={index} className="relative overflow-hidden border border-primary/20 bg-gradient-to-br from-card/90 to-surface/70 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 hover:border-primary/40 animate-fade-in shimmer-effect"
                style={{ animationDelay: `${index * 150}ms` }}>
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors duration-500"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary-glow/5 rounded-full blur-xl group-hover:bg-primary-glow/10 transition-colors duration-500"></div>
            
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Icon className="h-5 w-5 text-primary" />
                  <div className="absolute inset-0 rounded-xl bg-primary/10 animate-ping opacity-0 group-hover:opacity-30"></div>
                </div>
                <div className={`flex items-center text-sm transition-all duration-300 group-hover:scale-110 ${getChangeColor(stat.changeType)}`}>
                  <ChangeIcon className="h-3 w-3 mr-1 group-hover:animate-bounce" />
                  {stat.change}
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-105 transform origin-left">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-foreground group-hover:text-primary/80 transition-colors duration-300">{stat.title}</p>
                <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{stat.description}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};