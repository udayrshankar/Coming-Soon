import React, { useState, useEffect, useRef } from "react";
// Import Lucide icons based on your data's intended meaning
import { FileText, KanbanSquare, Repeat, Plug } from "lucide-react";

// The data structure you provided
const features = [
  {
    icon: FileText,
    title: "Fast, Accurate Response Drafting",
    description: "Lightning-fast, automated RFI & security questionnaire response drafting",
    gradient: "from-orange-400 via-yellow-400 to-orange-400",
    shadow: "shadow-orange-500/50",
  },
  {
    icon: KanbanSquare,
    title: "Unified Tasks",
    description: "Seamless team collaboration and task management",
    gradient: "from-purple-400 via-pink-500 to-purple-400",
    shadow: "shadow-pink-500/50",
  },
  {
    icon: Repeat,
    title: "Limitless",
    description: "Unlimited user availability and no hidden fees",
    gradient: "from-blue-400 via-cyan-400 to-blue-400",
    shadow: "shadow-cyan-500/50",
  },
  {
    icon: Plug,
    title: "Integration",
    description: "Integration with your favorite business tools",
    gradient: "from-green-400 via-teal-400 to-green-400",
    shadow: "shadow-teal-500/50",
  },
];

// --- Individual Card Component (Unchanged) ---

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradient,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  shadow: string;
}) => {
  return (
    // 'aspect-square' enforces the square shape
    <div className="group relative w-full aspect-square">
      {/* 1. THE SHADOW (GLOW) LAYER */}
      <div
        className={`absolute -inset-px rounded-xl bg-linear-to-r ${gradient} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      ></div>

      {/* 2. THE BORDER LAYER (Preserved empty as per input) */}

      {/* 3. THE CONTENT LAYER */}
      <div className="relative flex h-full flex-col justify-between rounded-xl bg-black p-6 m-px">
        {/* Icon at the Top Left */}
        <div>
          <Icon className="h-8 w-8 text-white" />
        </div>

        {/* Text at the Bottom Left */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-white leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Feature Cards Grid Component ---

const FeatureCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll listener for the mobile vertical carousel
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if the container is overlapping with the viewport
      if (top <= 0 && top > -height + windowHeight) {
        // Calculate how far we've scrolled into the container (0 to 1)
        const scrollDistance = -top;
        const totalScrollableDistance = height - windowHeight;
        
        // Use a slightly smaller denominator to ensure we reach the last item
        const progress = scrollDistance / totalScrollableDistance;
        
        // Map progress to the index of the features array
        const newIndex = Math.min(
          Math.max(Math.floor(progress * features.length), 0),
          features.length - 1
        );

        setActiveIndex(newIndex);
      } else if (top > 0) {
        // Reset to first slide if we are above the container
        setActiveIndex(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-12 flex flex-col justify-center">
      <h2
        className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-12 mx-auto max-w-full"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        Sneak Peek
      </h2>

      {/* --- DESKTOP VIEW: ORIGINAL GRID (Hidden on mobile) --- */}
      <div className="hidden lg:grid mx-auto max-w-7xl grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* --- MOBILE VIEW: VERTICAL SCROLL CAROUSEL (Hidden on desktop) --- */}
      {/* h-[300vh] creates a tall scrollable area. 
         As you scroll down this 300vh, the content stays sticky in the center 
         and the content changes based on scroll position.
      */}
      <div 
        ref={containerRef} 
        className="lg:hidden relative h-[300vh]"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-sm px-4">
             {/* Key changes trigger a slight fade animation */}
            <div key={activeIndex} className="animate-in fade-in zoom-in duration-300">
              <FeatureCard {...features[activeIndex]} />
            </div>
            
            {/* Optional: Simple Indicator to show user they can scroll */}
            <div className="mt-8 flex justify-center gap-2">
              {features.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-8 bg-white" : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeatureCards;