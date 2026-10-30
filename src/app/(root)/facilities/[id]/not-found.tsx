import Link from "next/link";
import { MapPinOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FacilityNotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <div className="flex size-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <MapPinOff aria-hidden="true" className="size-8" />
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-green-600">
        Facility not found
      </p>
      <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        We couldn&apos;t find that facility
      </h1>
      <p className="mt-3 max-w-lg text-muted-foreground">
        It may have been removed, or the link may be incorrect. Browse our
        available facilities to find another place to play.
      </p>
      <Button
        className="mt-8 rounded-xl"
        nativeButton={false}
        render={<Link href="/facilities" />}
      >
        Browse facilities
      </Button>
    </main>
  );
}
