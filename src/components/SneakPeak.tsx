import { motion } from "framer-motion";
import {
  FileText,
  KanbanSquare,
  Repeat,
  Plug
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Fast, Accurate Response Drafting",
    description:
      "Lightning-fast, automated RFI & security questionnaire response drafting",
    gradient: "from-orange-400 via-yellow-400 to-orange-400",
    shadow: "shadow-orange-500/40"
  },
  {
    icon: KanbanSquare,
    title: "Unified Tasks",
    description: "Seamless team collaboration and task management",
    gradient: "from-purple-400 via-pink-500 to-purple-400",
    shadow: "shadow-pink-500/40"
  },
  {
    icon: Repeat,
    title: "Limitless",
    description: "Unlimited user availability and no hidden fees",
    gradient: "from-blue-400 via-cyan-400 to-blue-400",
    shadow: "shadow-cyan-500/40"
  },
  {
    icon: Plug,
    title: "Integration",
    description: "Integration with your favorite business tools",
    gradient: "from-green-400 via-teal-400 to-green-400",
    shadow: "shadow-teal-500/40"
  }
];

export function SneakPeak() {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-white text-center mb-14">
        Sneak Peek
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="relative group cursor-pointer"
          >
            {/* Hover Glow Shadow (only on hover) */}
            <div
              className={`
                absolute -inset-1 rounded-2xl 
                opacity-0 group-hover:opacity-60 
                transition-all duration-500 blur-2xl 
                bg-gradient-to-r ${feature.gradient}
              `}
            />

            {/* Card Container */}
            <div
              className={`
                relative rounded-2xl p-8 h-[220px] group-hover:h-[270px]
                bg-black border border-white/10
                transition-all duration-500 flex flex-col
              `}
            >
              {/* Icon */}
              <feature.icon className="w-12 h-12 text-white mb-6 opacity-90" />

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className={`
                  text-gray-400 text-sm leading-relaxed
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500
                `}
              >
                {feature.description}
              </p>

              {/* ✨ Animated Gradient Border */}
              <div
                className={`
                  absolute inset-0 rounded-2xl pointer-events-none
                  p-0.5 
                `}
              >
                <div
                  className={`
                    w-full h-full rounded-2xl 
                    bg-linear-to-r ${feature.gradient} 
                    animate-gradient-flow
                  `}
                  style={{
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
