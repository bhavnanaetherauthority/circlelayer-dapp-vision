import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  MapPin, 
  Activity,
  ExternalLink,
  Zap
} from "lucide-react";
import networkBg from "@/assets/network-bg.jpg";

const regions = [
  { name: "North America", nodes: 8, status: "online" },
  { name: "Europe", nodes: 12, status: "online" }, 
  { name: "Asia Pacific", nodes: 6, status: "degraded" },
  { name: "South America", nodes: 3, status: "offline" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'online': return 'border-success text-success bg-success/10';
    case 'offline': return 'border-destructive text-destructive bg-destructive/10';
    case 'degraded': return 'border-warning text-warning bg-warning/10';
    default: return 'border-muted text-muted-foreground bg-muted/10';
  }
};

export const NetworkMap = () => {
  return (
    <Card className="border border-primary/20 bg-gradient-to-br from-card/90 to-surface/70 backdrop-blur-xl h-full overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/40">
      <div className="p-6 relative">
        <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-700"
             style={{ backgroundImage: `url(${networkBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute -top-2 -right-2 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
        
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shadow-lg">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Global Network</h3>
              <p className="text-sm text-muted-foreground">Real-time node distribution</p>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="shimmer-effect hover:scale-105 transition-transform duration-300">
            <ExternalLink className="h-4 w-4 mr-2" />
            Full Map
          </Button>
        </div>

        {/* Enhanced Map Container */}
        <div className="relative h-96 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/5 rounded-xl border border-primary/20 flex items-center justify-center overflow-hidden group/map hover:border-primary/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-glow/15 animate-pulse"></div>
          
          {/* Enhanced floating particles */}
          <div className="absolute top-4 left-8 w-3 h-3 bg-primary/60 rounded-full animate-ping"></div>
          <div className="absolute top-12 right-12 w-2 h-2 bg-primary-glow/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-8 left-16 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-16 right-8 w-1 h-1 bg-primary-glow/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-primary-glow/40 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          
          <div className="text-center relative z-10">
            <div className="relative mb-4">
              <div className="absolute inset-0 animate-ping bg-primary/30 rounded-full blur-lg"></div>
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-2xl"></div>
              <Globe className="h-16 w-16 text-primary mx-auto relative z-10 group-hover/map:scale-110 group-hover/map:rotate-12 transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover/map:text-primary transition-colors duration-300">Global Network</h3>
            <p className="text-muted-foreground text-sm mb-4">Interactive map visualization</p>
            <div className="flex justify-center space-x-6 text-xs">
              <span className="flex items-center space-x-2 group-hover/map:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse shadow-lg"></div>
                <span className="text-success font-medium">Active</span>
              </span>
              <span className="flex items-center space-x-2 group-hover/map:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-node-syncing rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-node-syncing font-medium">Syncing</span>
              </span>
              <span className="flex items-center space-x-2 group-hover/map:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-destructive rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
                <span className="text-destructive font-medium">Offline</span>
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Regional Stats */}
        <div className="mt-6 space-y-3 relative z-10">
          {regions.map((region, index) => (
            <div 
              key={region.name} 
              className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/40 hover:to-muted/20 transition-all duration-300 group/region hover:translate-x-2 hover:scale-105 border border-transparent hover:border-primary/20 shimmer-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover/region:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-primary group-hover/region:animate-bounce" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground group-hover/region:text-primary transition-colors duration-300">{region.name}</p>
                  <p className="text-xs text-muted-foreground">{region.nodes} active nodes</p>
                </div>
              </div>
              
              <Badge variant="outline" className={`${getStatusColor(region.status)} group-hover/region:scale-105 transition-transform duration-300`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  region.status === 'online' ? 'bg-success animate-pulse' :
                  region.status === 'offline' ? 'bg-destructive animate-pulse' :
                  'bg-warning animate-ping'
                }`}></div>
                {region.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};