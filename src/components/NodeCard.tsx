import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Server, 
  Activity, 
  Zap, 
  Clock, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  HardDrive
} from "lucide-react";

interface NodeCardProps {
  node: {
    id: string;
    name: string;
    status: 'online' | 'offline' | 'syncing' | 'degraded';
    location: string;
    uptime: number;
    performance: number;
    memoryUsage: number;
    cpuUsage: number;
    diskUsage: number;
    latency: number;
    peers: number;
    blockHeight: number;
    version: string;
  };
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'online': return 'border-node-online text-node-online bg-node-online/10';
    case 'offline': return 'border-node-offline text-node-offline bg-node-offline/10';
    case 'syncing': return 'border-node-syncing text-node-syncing bg-node-syncing/10';
    case 'degraded': return 'border-node-degraded text-node-degraded bg-node-degraded/10';
    default: return 'border-muted text-muted-foreground bg-muted/10';
  }
};

export const NodeCard = ({ node }: NodeCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-surface border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="p-2 rounded-lg bg-muted">
                <Server className="h-5 w-5 text-primary" />
              </div>
              {node.status === 'online' && (
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-node-online rounded-full animate-pulse"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{node.name}</h3>
              <p className="text-sm text-muted-foreground">{node.location}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={getStatusColor(node.status)}>
              {node.status}
            </Badge>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center">
                <Activity className="h-3 w-3 mr-1" />
                Uptime
              </span>
              <span className="font-medium text-success">{node.uptime}%</span>
            </div>
            <Progress value={node.uptime} className="h-1" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center">
                <Zap className="h-3 w-3 mr-1" />
                Performance
              </span>
              <span className="font-medium text-foreground">{node.performance}%</span>
            </div>
            <Progress value={node.performance} className="h-1" />
          </div>
        </div>

        {/* Resource Usage */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 rounded-lg bg-muted/50">
            <Cpu className="h-4 w-4 mx-auto mb-1 text-primary" />
            <div className="text-xs text-muted-foreground">CPU</div>
            <div className="text-sm font-medium">{node.cpuUsage}%</div>
          </div>
          
          <div className="text-center p-2 rounded-lg bg-muted/50">
            <Activity className="h-4 w-4 mx-auto mb-1 text-primary" />
            <div className="text-xs text-muted-foreground">Memory</div>
            <div className="text-sm font-medium">{node.memoryUsage}%</div>
          </div>
          
          <div className="text-center p-2 rounded-lg bg-muted/50">
            <HardDrive className="h-4 w-4 mx-auto mb-1 text-primary" />
            <div className="text-xs text-muted-foreground">Disk</div>
            <div className="text-sm font-medium">{node.diskUsage}%</div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm border-t border-border pt-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {node.latency}ms
            </div>
            <div className="flex items-center text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1" />
              {node.peers} peers
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            Block #{node.blockHeight.toLocaleString()}
          </div>
        </div>
      </div>
    </Card>
  );
};