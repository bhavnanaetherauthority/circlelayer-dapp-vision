import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github,
  Twitter,
  Linkedin,
  Mail,
  Globe,
  Shield,
  Zap,
  Users,
  BookOpen,
  MessageCircle,
  ExternalLink,
  Heart
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Node Dashboard", href: "#" },
    { name: "Network Analytics", href: "#" },
    { name: "API Access", href: "#" },
    { name: "Mobile App", href: "#" }
  ],
  developers: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "SDK", href: "#" },
    { name: "Status Page", href: "#" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" }
  ]
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Github", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Discord", icon: MessageCircle, href: "#" }
];

export const Footer = () => {
  return (
    <footer className="relative bg-surface border-t border-card-border mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary via-transparent to-primary-glow"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 mb-16 border border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with CircleLayer
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest updates on network performance, new features, and blockchain infrastructure insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="default" className="px-6 py-3">
                Subscribe
                <Mail className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold gradient-text">CircleLayer</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Powering the future of decentralized infrastructure with reliable, 
              scalable blockchain node networks.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-primary" />
              Developers
            </h4>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <Users className="h-4 w-4 mr-2 text-primary" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <Shield className="h-4 w-4 mr-2 text-primary" />
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© 2024 CircleLayer. All rights reserved.</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 animate-pulse" />
              <span>for Web3</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
            <Button variant="outline" size="sm" className="text-xs">
              Status Page
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-8 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-12 left-12 w-1 h-1 bg-primary-glow/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};