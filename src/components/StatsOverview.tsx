import { Card } from "@/components/ui/card";
import { 
  Server, 
  Activity, 
  Users, 
  Zap,
  TrendingUp,
  TrendingDown,
  Minus
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
          <Card key={index} className="relative overflow-hidden bg-surface border-card-border hover:border-primary/30 transition-all duration-300 group">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className={`flex items-center text-sm ${getChangeColor(stat.changeType)}`}>
                  <ChangeIcon className="h-3 w-3 mr-1" />
                  {stat.change}
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-foreground">{stat.title}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};