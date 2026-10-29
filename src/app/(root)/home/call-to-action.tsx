import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="bg-green-700 dark:bg-green-800">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to Book Your Next Game?
        </h2>
        <p className="mt-4 text-lg text-green-100">
          Join thousands of sports enthusiasts who trust SportsNest for their
          bookings.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-2xl bg-white px-8 text-base font-bold text-green-700 shadow-lg hover:bg-green-50"
            nativeButton={false}
            render={<Link href="/facilities" />}
          >
            Browse Facilities
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-2xl border-white/30 bg-green-600/40 px-8 text-base font-semibold text-white hover:bg-green-600/60 hover:text-white dark:border-white/30 dark:bg-green-600/40 dark:hover:bg-green-600/60"
            nativeButton={false}
            render={<Link href="/facilities" />}
          >
            Create Free Account
          </Button>
        </div>
      </div>
    </section>
  );
}
