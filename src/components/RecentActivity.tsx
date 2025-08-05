import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock,
  ExternalLink
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "node_online",
    title: "Node EU-West-3 came online",
    description: "Frankfurt validator node resumed operations",
    timestamp: "2 minutes ago",
    status: "success",
    icon: CheckCircle
  },
  {
    id: 2,
    type: "performance_alert",
    title: "High latency detected",
    description: "Asia-Pacific-1 experiencing elevated response times",
    timestamp: "5 minutes ago",
    status: "warning",
    icon: AlertTriangle
  },
  {
    id: 3,
    type: "node_offline",
    title: "Node SA-East-1 went offline",
    description: "São Paulo validator node disconnected",
    timestamp: "12 minutes ago",
    status: "error",
    icon: XCircle
  },
  {
    id: 4,
    type: "sync_complete",
    title: "Block sync completed",
    description: "NA-Central-2 successfully synced to block #2,847,392",
    timestamp: "18 minutes ago",
    status: "success",
    icon: CheckCircle
  },
  {
    id: 5,
    type: "maintenance",
    title: "Scheduled maintenance started",
    description: "EU-North-1 undergoing routine updates",
    timestamp: "1 hour ago",
    status: "info",
    icon: Clock
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'success': return 'text-success border-success/20 bg-success/10';
    case 'warning': return 'text-warning border-warning/20 bg-warning/10';
    case 'error': return 'text-destructive border-destructive/20 bg-destructive/10';
    case 'info': return 'text-primary border-primary/20 bg-primary/10';
    default: return 'text-muted-foreground border-border bg-muted/10';
  }
};

export const RecentActivity = () => {
  return (
    <Card className="border border-primary/20 bg-gradient-to-br from-card/90 to-surface/70 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/40 shimmer-effect">
      <div className="p-6 relative">
        <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
        
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shadow-lg">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Recent Activity</h3>
              <p className="text-sm text-muted-foreground">Network events and alerts</p>
            </div>
            <div className="ml-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
            <ExternalLink className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>

        <ScrollArea className="h-96">
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div 
                  key={activity.id} 
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-muted/40 hover:to-muted/20 transition-all duration-300 cursor-pointer group hover:translate-x-2 hover:scale-105 animate-fade-in border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${activity.id * 100}ms` }}
                >
                  <div className={`p-3 rounded-xl border relative ${getStatusColor(activity.status)} group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-0 group-hover:opacity-20 bg-current"></div>
                    <Icon className="h-4 w-4 relative z-10" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {activity.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors duration-300">
                          {activity.description}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs ml-2 shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {activity.timestamp}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="w-1 h-12 bg-gradient-to-b from-primary/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
};