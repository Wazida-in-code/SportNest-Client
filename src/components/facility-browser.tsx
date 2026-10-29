"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { FacilityCard } from "@/components/facility-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { facilities, type Facility } from "@/lib/data";

const sports = ["All", ...Array.from(new Set(facilities.map((f) => f.sport)))];

type SortKey = "popular" | "price-low" | "price-high" | "rating";

const sortOptions: { label: string; value: SortKey }[] = [
  { label: "Most Popular", value: "popular" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Top Rated", value: "rating" },
];

function resolveSport(param: string | null): string {
  if (!param) return "All";
  const match = sports.find(
    (sport) => sport.toLowerCase() === param.toLowerCase()
  );
  return match ?? "All";
}

export function FacilityBrowser() {
  const searchParams = useSearchParams();
  const sportParam = searchParams.get("sport");

  const [query, setQuery] = useState("");
  const [activeSport, setActiveSport] = useState(() =>
    resolveSport(sportParam)
  );
  const [sort, setSort] = useState<SortKey>("popular");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = facilities.filter((facility: Facility) => {
      const matchesSport =
        activeSport === "All" || facility.sport === activeSport;
      const matchesQuery =
        normalizedQuery === "" ||
        facility.name.toLowerCase().includes(normalizedQuery) ||
        facility.location.toLowerCase().includes(normalizedQuery) ||
        facility.sport.toLowerCase().includes(normalizedQuery);
      return matchesSport && matchesQuery;
    });

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case "price-low":
          return a.pricePerHour - b.pricePerHour;
        case "price-high":
          return b.pricePerHour - a.pricePerHour;
        case "rating":
          return b.rating - a.rating;
        case "popular":
        default:
          return b.reviews - a.reviews;
      }
    });
  }, [query, activeSport, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            aria-label="Search facilities"
            placeholder="Search by venue, sport or location…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-9 pl-9"
          />
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal className="size-4 shrink-0 text-muted-foreground" />
          <label htmlFor="facility-sort" className="sr-only">
            Sort facilities
          </label>
          <select
            id="facility-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="h-9 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {sports.map((sport) => (
          <button
            key={sport}
            type="button"
            onClick={() => setActiveSport(sport)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeSport === sport
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {sport}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "facility" : "facilities"} found
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="font-heading text-lg font-semibold">
            No facilities match your search
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a different sport or clear the search box.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveSport("All");
            }}
            className="mt-4 text-sm font-medium text-primary hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
