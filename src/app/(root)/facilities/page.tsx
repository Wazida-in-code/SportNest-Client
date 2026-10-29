import type { Metadata } from "next";
import { Suspense } from "react";
import { FacilityBrowser } from "@/components/facility-browser";

export const metadata: Metadata = {
  title: "All Facilities | SportsNest",
  description:
    "Browse and book verified sports facilities near you — turfs, courts, pools and more.",
};

export default function FacilitiesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          All Facilities
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Explore every verified venue on SportsNest. Filter by sport, search
          by location, and book your slot instantly.
        </p>
      </div>

      <div className="mt-10">
        <Suspense
          fallback={
            <p className="text-sm text-muted-foreground">Loading facilities…</p>
          }
        >
          <FacilityBrowser />
        </Suspense>
      </div>
    </div>
  );
}
