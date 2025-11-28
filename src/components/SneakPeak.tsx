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

// --- Individual Card Component ---

const FeatureCard = ({ icon: Icon, title, description, gradient }: { icon: React.ElementType; title: string; description: string; gradient: string; shadow: string }) => {
  return (
    // 'aspect-square' enforces the square shape
    <div className="group relative w-full aspect-square">
      
      {/* 1. THE SHADOW (GLOW) LAYER 
        - Uses absolute positioning behind the card.
        - Has 'blur-xl' to make it look like a glow.
        - 'opacity-0' by default, becomes visible ('opacity-100') on group-hover.
      */}
      <div
        className={`absolute -inset-px rounded-xl bg-linear-to-r ${gradient} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      ></div>

      {/* 2. THE BORDER LAYER 
        - This creates the gradient border line.
        - It is always visible (opacity-100).
      */}
      

      {/* 3. THE CONTENT LAYER 
        - Pure black background.
        - 'm-[1px]' is used to inset this block slightly, revealing the gradient div behind it as a thin border.
      */}
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
  return (
    <div className="p-12 flex flex-col justify-center">
      <h2
        className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-12 mx-auto max-w-full"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        Sneak Peek
      </h2>
      
      {/* Grid updated to be responsive but keeping squares manageable */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;