import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Clock3, MapPin, Users } from "lucide-react";
import type { ApiFacility } from "@/components/api-facility-card";
import BookingForm from "@/app/dashboard/_components/BookingForm";


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
          <div className="relative aspect-[16/9] bg-gradient-to-br">
            {facility.imageUrl ? (
              <img
                src={facility.imageUrl}
                alt={facility.facilityName}
                className="h-[400px] w-[500px] object-cover"
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

            <BookingForm
              facilityId={facility._id}
              facilityName={facility.facilityName}
              price={facility.price}
            />
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
