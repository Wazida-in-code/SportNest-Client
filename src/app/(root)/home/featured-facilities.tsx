import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FacilityCard } from "@/components/facility-card";
import { Button } from "@/components/ui/button";
import { featuredFacilities } from "@/lib/data";

export function FeaturedFacilities() {
  return (
    <section className="border-y border-border/60 bg-gray-50 dark:bg-gray-900/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured Facilities
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Top-rated venues available for your next game
            </p>
          </div>
          <Link
            href="/facilities"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-green-700 transition-colors hover:text-green-800 dark:text-green-400"
          >
            View All
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl"
            nativeButton={false}
            render={<Link href="/facilities" />}
          >
            Browse All Facilities
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
