import { FileText, KanbanSquare, Repeat, Plug } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Fast, Accurate Response",
    description:
      "Lightning-fast, accurate questionnaire response drafting",
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
    <div className="group relative md:w-full w-80">
      {/* OUTER HOVER GLOW */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl bg-linear-to-r ${gradient}
                blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* CARD */}
      <div className="relative flex h-full flex-col rounded-xl bg-[#0c0718] p-6 shadow-[0_0_20px_rgba(255,255,255,0.25)]">
        {/* Icon */}
        <div className="w-full flex items-center h-20 mb-6">
          <Icon className="h-20 w-20 text-white" strokeWidth={1} />
        </div>

        {/* Heading */}
        <h3
          className="text-xl font-bold text-white leading-tight translate-y-5 min-h-12 mb-1"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-500 font-medium leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

// --- Main Feature Cards Grid Component ---

const FeatureCards = () => {
  return (
    <div className="pt-20 pb-15 flex flex-col justify-center">
      <h2
        className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-12 mx-auto max-w-full"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
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
