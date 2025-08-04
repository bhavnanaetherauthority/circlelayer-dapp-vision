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
    <Card className="bg-surface border-card-border h-full overflow-hidden group">
      <div className="p-6 relative">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
             style={{ backgroundImage: `url(${networkBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Global Network</h3>
              <p className="text-sm text-muted-foreground">Real-time node distribution</p>
            </div>
          </div>
          
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Full Map
          </Button>
        </div>

        {/* Map Container */}
        <div className="relative h-96 bg-muted/20 rounded-lg border border-border flex items-center justify-center overflow-hidden group/map">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10 animate-pulse"></div>
          <div className="text-center relative z-10">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover/map:text-primary transition-colors duration-300">Global Network</h3>
            <p className="text-muted-foreground text-sm">Interactive map coming soon</p>
          </div>
          {/* Floating particles effect */}
          <div className="absolute top-4 left-8 w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
          <div className="absolute top-12 right-12 w-1 h-1 bg-primary-glow/80 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-16 right-8 w-1 h-1 bg-primary-glow/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Regional Stats */}
        <div className="mt-6 space-y-3 relative z-10">
          {regions.map((region, index) => (
            <div 
              key={region.name} 
              className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-all duration-300 group/region hover:translate-x-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary group-hover/region:animate-float" />
                <div>
                  <p className="text-sm font-medium text-foreground">{region.name}</p>
                  <p className="text-xs text-muted-foreground">{region.nodes} nodes</p>
                </div>
              </div>
              
              <Badge variant="outline" className={getStatusColor(region.status)}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  region.status === 'online' ? 'bg-success animate-pulse' :
                  region.status === 'offline' ? 'bg-destructive' :
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