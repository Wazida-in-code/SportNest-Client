import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, MapPin, Users } from "lucide-react";
import type { ApiFacility } from "@/components/api-facility-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


async function FacilityDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/facilities/${id}`,
    {
      cache: "no-store",
    },
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    notFound()
  }

  const facility: ApiFacility = await response.json();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <article className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative aspect-[16/9] bg-gradient-to-br from-green-500 to-emerald-700">
            {facility.imageUrl ? (
              <img
                src={facility.imageUrl}
                alt={facility.facilityName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-lg font-medium text-white">
                {facility.facilityName}
              </div>
            )}
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-sm font-medium capitalize text-foreground">
              {facility.sportType}
            </span>
          </div>

          <div className="space-y-6 p-5 sm:p-8">
            <div className="space-y-2">
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                {facility.facilityName}
              </h1>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 shrink-0" />
                {facility.location}
              </p>
            </div>

            <div className="grid gap-4 rounded-xl bg-muted/50 p-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <Clock3 className="size-5 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Available hours</p>
                  <p className="font-medium">{facility.timeSlot}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="size-5 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                  <p className="font-medium">{facility.capacity} players</p>
                </div>
              </div>
            </div>

            <section aria-labelledby="facility-description">
              <h2
                id="facility-description"
                className="font-heading text-xl font-semibold"
              >
                About this facility
              </h2>
              <p className="mt-2 whitespace-pre-wrap leading-relaxed text-muted-foreground">
                {facility.description}
              </p>
            </section>
          </div>
        </article>

        <aside className="lg:sticky lg:top-24">
          <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex items-baseline justify-between gap-3 border-b border-border pb-4">
              <p className="text-sm text-muted-foreground">Booking price</p>
              <p className="font-heading text-2xl font-bold">
                ${facility.price}
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  /hour
                </span>
              </p>
            </div>

            <div className="mt-5">
              <h2 className="font-heading text-xl font-semibold">
                Book this facility
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Choose a date and time for {facility.facilityName}.
              </p>
            </div>

            <form className="mt-5 space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="booking-name" className="text-sm font-medium">
                  Your name
                </label>
                <Input
                  id="booking-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="booking-email" className="text-sm font-medium">
                  Email address
                </label>
                <Input
                  id="booking-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label htmlFor="booking-date" className="text-sm font-medium">
                    Date
                  </label>
                  <Input id="booking-date" name="date" type="date" required />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="booking-time" className="text-sm font-medium">
                    Start time
                  </label>
                  <Input id="booking-time" name="time" type="time" required />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="booking-duration"
                  className="text-sm font-medium"
                >
                  Duration
                </label>
                <select
                  id="booking-duration"
                  name="duration"
                  defaultValue="1"
                  className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </div>

              <Button
                type="button"
                
                className="h-10 w-full gap-2 rounded-xl"
              >
                <CalendarDays className="size-4" />
                Booking unavailable
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Booking requests are not connected yet.
              </p>
            </form>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default async function FacilitiesDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-7xl px-4 py-12 text-muted-foreground sm:px-6 lg:px-8">
          Loading facility...
        </div>
      }
    >
      <FacilityDetails params={params} />
    </Suspense>
  );
}
