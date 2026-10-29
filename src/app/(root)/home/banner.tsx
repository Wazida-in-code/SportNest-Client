import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImage, stats } from "@/lib/data";

export function Banner() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Sports field"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/70 to-green-900/60" />
      </div>

      {/* floating glass badges */}
      <div className="absolute top-24 left-8 hidden items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur lg:flex">
        <span className="size-2 animate-pulse rounded-full bg-green-400" />
        500+ Active Facilities
      </div>
      <div className="absolute right-12 bottom-32 hidden items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur lg:flex">
        <CheckCircle2 className="size-4 text-green-400" />
        10,000+ Bookings Made
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-28 text-center sm:px-6">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-600/20 px-4 py-1.5 text-sm font-medium text-green-300">
          <Trophy className="size-4" />
          #1 Sports Booking Platform
        </span>

        <h1 className="font-heading text-5xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Book Your
          <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Perfect Court
          </span>
        </h1>

        <p className="mx-auto mt-6 mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Discover and reserve premium sports facilities — football turfs,
          badminton courts, swimming lanes, and more. Instant booking, zero
          hassle.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-2xl bg-green-600 px-8 text-base font-bold shadow-xl shadow-green-500/25 hover:bg-green-700"
            nativeButton={false}
            render={<Link href="/facilities" />}
          >
            Explore Facilities
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-2xl border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/20 hover:text-white dark:border-white/30 dark:bg-white/10 dark:hover:bg-white/20"
            nativeButton={false}
            render={<Link href="/facilities" />}
          >
            Get Started Free
          </Button>
        </div>

        <dl className="mt-14 flex flex-wrap justify-center gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-2xl font-extrabold text-white">
                {stat.value}
              </dd>
              <dd className="mt-0.5 text-xs text-gray-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
