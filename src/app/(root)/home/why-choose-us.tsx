import {
  Award,
  Calendar,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { whyChooseUs } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  shield: Shield,
  award: Award,
};

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionHeading
        eyebrow="Why Choose SportsNest?"
        title="Everything you need for a seamless sports booking experience"
      />

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {whyChooseUs.map((feature) => {
          const Icon = iconMap[feature.icon] ?? Calendar;
          return (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-2xl border border-border/60 bg-gray-50 p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-900/40"
            >
              <span
                className={`flex size-14 items-center justify-center rounded-2xl ${feature.tint}`}
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
