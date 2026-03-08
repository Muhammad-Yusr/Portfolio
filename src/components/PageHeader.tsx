interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradient?: boolean;
}

const PageHeader = ({ title, subtitle, gradient = true }: PageHeaderProps) => {
  return (
    <div className="text-center mb-16 pt-32 overflow-visible">
      <h1 
        className={`font-display font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight pt-2 pb-4 opacity-0 animate-fade-up ${gradient ? 'gradient-text' : 'text-foreground'}`}
      >
        {title}
      </h1>
      <p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up"
        style={{ animationDelay: '100ms' }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;
