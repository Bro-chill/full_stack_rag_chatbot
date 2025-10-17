import type { ComponentType, SVGProps } from "react";

interface FeatureCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  shadowColor: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  shadowColor,
}: FeatureCardProps) {
  return (
    <div
      className={`group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-${shadowColor}/20`}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className={`p-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl shadow-lg shadow-${shadowColor}/50`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm text-center">{description}</p>
      </div>
    </div>
  );
}
