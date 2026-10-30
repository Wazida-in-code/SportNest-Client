import type { Metadata } from "next";
import { Suspense } from "react";
import { FacilityBrowser } from "@/components/facility-browser";
import {
  ApiFacilityCard,
  type ApiFacility,
} from "@/components/api-facility-card";

export const metadata: Metadata = {
  title: "All Facilities | SportsNest",
  description:
    "Browse and book verified sports facilities near you — turfs, courts, pools and more.",
};

async function FacilitiesSection() {
  const facilities = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/facilities`,
    {
      cache: "no-store",
    }
  );
  const facilitiesData = await facilities.json();
  console.log(facilitiesData);

  const apiFacilities: ApiFacility[] = Array.isArray(facilitiesData)
    ? (facilitiesData as ApiFacility[])
    : [];

  return (
    <div className="space-y-12">
      <section>
        <div className="mb-6">
          <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
            From the database
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {apiFacilities.length}{" "}
            {apiFacilities.length === 1 ? "facility" : "facilities"} loaded
            from your server
          </p>
        </div>

        {apiFacilities.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apiFacilities.map((facility) => (
              <ApiFacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="font-heading text-lg font-semibold">
              No facilities yet
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Add your first facility from the dashboard to see it here.
            </p>
          </div>
        )}
      </section>

      {/* <FacilityBrowser /> */}
    </div>
  );
}

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
          <FacilitiesSection />
        </Suspense>
      </div>
    </div>
  );
}
