import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import banner from "@/assets/3d/banner.png"
import livingroom from "@/assets/3d/livingroom.png";
import bedroom from "@/assets/3d/bedroom.png";
import liminal from "@/assets/3d/liminal.png";
import animation from "@/assets/3d/animation.mp4";

type MediaItem = {
  src: string;
  type: "image" | "video";
};

const mediaItems: MediaItem[] = [
  { src: livingroom, type: "image" },
  { src: banner, type: "image" },
  { src: animation, type: "video" },
  { src: bedroom, type: "image" },
  { src: liminal, type: "image" },
];

const ThreeDGallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="container mx-auto px-6 pb-20">
        <PageHeader 
          title="3D Works"
          subtitle="A curated collection of 3D renders, animations, and visual experiments pushing the boundaries of digital art."
        />
        
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {mediaItems.map((item, index) => (
            <div 
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl group"
            >
              {item.type === "image" ? (
                <img 
                  src={item.src} 
                  alt="" 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <video 
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default ThreeDGallery;
