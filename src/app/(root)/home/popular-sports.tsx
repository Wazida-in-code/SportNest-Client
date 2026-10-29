import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { popularSports } from "@/lib/data";

export function PopularSports() {
  return (
    <section
      id="sports"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Popular Sports"
          title="Find facilities for every sport you love"
          className="max-w-xl text-left"
        />
        <Link
          href="/facilities"
          className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-800 dark:text-green-400"
        >
          View all sports
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {popularSports.map((sport) => (
          <li key={sport.name}>
            <Link
              href={`/facilities?sport=${sport.slug}`}
              className={`flex flex-col items-center gap-3 rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${sport.tint}`}
            >
              <span className="text-4xl">{sport.emoji}</span>
              <span className="text-sm font-semibold">{sport.name}</span>
              <span className="text-xs opacity-70">
                from ${sport.from}/hr
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
