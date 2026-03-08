import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, image, tags, className, delay = 0 }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border/50 card-elevated opacity-0 animate-fade-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-display font-bold text-xl mb-2 text-foreground">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-colors duration-300" />
    </div>
  );
};

export default ProjectCard;
