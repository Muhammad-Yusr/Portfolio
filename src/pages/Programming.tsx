import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import { Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cyber Security Project",
    description: "This is a bare-bones secure chat application where the server and each client are Python files. For multiple clients, just make multiple client files and make changes as needed. Two client files are given for reference.",
    tags: ["Python", "Sockets", "Encryption"],
    github: "https://github.com/Muhammad-Yusr/Cyber-Security-Project",
  },
  {
    title: "Reading Tracker",
    description: "Check the Python files to know required libraries. Launch app.py (main.py required but not supposed to be launched). So far this is just a fillable form using PyQt5 for UI and OpenLibraryAPI for giving book search suggestions (and potentially book cover images)...",
    tags: ["Python", "PyQt5", "OpenLibrary API"],
    github: "https://github.com/Muhammad-Yusr/Reading-Tracker",
  },
  {
    title: "Lecture Summarizer",
    description: "An AI tool that extracts key ideas from lecture transcripts using NLP.",
    tags: ["Python", "NLP", "AI"],
    github: "https://github.com/Muhammad-Yusr/Lecture-Summarizer",
  },
  {
    title: "Expo ML Project",
    description: "This shows country data about energy using graphs and also can compare data of different countries.",
    tags: ["Python", "Data Visualization", "ML"],
    github: "https://github.com/Muhammad-Yusr/Expo-ML-project",
  },
];

const Programming = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="container mx-auto px-6 pb-20">
        <PageHeader 
          title="Programming"
          subtitle="A showcase of programming projects ranging from secure applications to AI tools and data visualization."
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 card-elevated opacity-0 animate-fade-up transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl mb-1 text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
              
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Programming;
