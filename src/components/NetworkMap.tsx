import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Expand } from "lucide-react";

const networkRegions = [
  { name: "North America", nodes: 423, status: "optimal", color: "bg-success" },
  { name: "Europe", nodes: 298, status: "optimal", color: "bg-success" },
  { name: "Asia Pacific", nodes: 387, status: "good", color: "bg-node-syncing" },
  { name: "South America", nodes: 89, status: "degraded", color: "bg-node-degraded" },
  { name: "Africa", nodes: 50, status: "good", color: "bg-node-syncing" }
];

export const NetworkMap = () => {
  return (
    <Card className="bg-surface border-card-border">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Global Network</h3>
              <p className="text-sm text-muted-foreground">Distributed node coverage</p>
            </div>
          </div>
          
          <Button variant="outline" size="sm">
            <Expand className="h-4 w-4 mr-2" />
            Full Map
          </Button>
        </div>

        {/* Network visualization placeholder */}
        <div className="relative mb-6">
          <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center border border-border">
            <div className="text-center">
              <Globe className="h-12 w-12 text-primary/60 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Interactive world map</p>
              <p className="text-xs text-muted-foreground">Real-time node locations</p>
            </div>
          </div>
          
          {/* Floating node indicators */}
          <div className="absolute top-4 left-8 w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-16 w-2 h-2 bg-node-syncing rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-1/3 w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 right-8 w-2 h-2 bg-node-degraded rounded-full animate-pulse"></div>
        </div>

        {/* Regional breakdown */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground mb-3">Regional Distribution</h4>
          {networkRegions.map((region, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${region.color}`}></div>
                <div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{region.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Badge variant="outline" className="text-xs">
                  {region.nodes} nodes
                </Badge>
                <span className="text-xs text-muted-foreground capitalize">
                  {region.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};