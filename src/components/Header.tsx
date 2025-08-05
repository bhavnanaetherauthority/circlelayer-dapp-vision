import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Network, Wallet, Settings, Bell } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-glass">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/lovable-uploads/29695337-562e-4e66-8226-abd0576ae44c.png" 
                  alt="CircleLayer Logo" 
                  className="h-8 w-8 object-contain"
                />
                <div className="absolute -inset-1 bg-gradient-primary rounded-lg opacity-20 animate-pulse-slow"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">CircleLayer</h1>
                <p className="text-xs text-muted-foreground">Node Network</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Nodes
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Validators
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Analytics
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="hidden sm:flex border-success text-success">
              <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
              Network Online
            </Badge>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Settings className="h-4 w-4" />
            </Button>
            
            <Button variant="connect" size="default" className="font-medium">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};