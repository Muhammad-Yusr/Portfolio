import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Box, Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 opacity-0 animate-fade-up"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="text-sm text-muted-foreground">Creative Developer & 3D Artist</span>
            </div>
            
            <h1 
              className="opacity-0 animate-fade-up mb-6 text-center"
              style={{ animationDelay: '100ms' }}
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl leading-none font-hero-stretched uppercase">
                Crafting Digital
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl leading-none font-hero-stretched uppercase gradient-text">
                Experiences
              </span>
            </h1>
            
            <p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Where code meets creativity. I specialize in stunning 3D renders, 
              captivating animations, and powerful Python applications.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <Link to="/3d-gallery">
                <Button variant="hero" size="xl">
                  <Box className="w-5 h-5" />
                  View 3D Works
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/python-projects">
                <Button variant="hero-outline" size="xl">
                  <Code className="w-5 h-5" />
                  Python Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: '500ms' }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 3D Card */}
            <Link to="/3d-gallery" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 h-80 card-elevated transition-all duration-500 hover:border-primary/50 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Box className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h2 className="font-display font-bold text-3xl mb-4 text-foreground">
                    3D Renders & Animations
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    Explore my collection of 3D artwork, from photorealistic renders 
                    to abstract animations and everything in between.
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary font-display font-medium">
                    <span>Explore Gallery</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Python Card */}
            <Link to="/python-projects" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 h-80 card-elevated transition-all duration-500 hover:border-accent/50 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h2 className="font-display font-bold text-3xl mb-4 text-foreground">
                    Python Projects
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    Discover my Python applications, from automation scripts 
                    to data visualization tools and machine learning experiments.
                  </p>
                  
                  <div className="flex items-center gap-2 text-accent font-display font-medium">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
