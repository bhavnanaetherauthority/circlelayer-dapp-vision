import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Network, Wallet, Settings, Bell } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-glass">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/29695337-562e-4e66-8226-abd0576ae44c.png" 
                    alt="CircleLayer Logo" 
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-full animate-pulse-slow"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  CircleLayer
                </h1>
                <p className="text-xs text-muted-foreground">Node Network</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-cyan-400 transition-colors duration-300">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors duration-300">
              Nodes
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors duration-300">
              Validators
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors duration-300">
              Analytics
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="hidden sm:flex border-green-400/50 text-green-400 bg-green-400/10">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Network Online
            </Badge>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Settings className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="default" className="font-medium border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};