"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Trophy, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-green-600 shadow-md transition-transform group-hover:scale-105">
            <Trophy className="size-5 text-white" />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-tight">
            Sports<span className="text-green-600">Nest</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "font-bold text-green-600"
                    : "font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            className="rounded-xl font-semibold"
            nativeButton={false}
            render={<Link href="/facilities" />}
          >
            Book Now
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <nav className="space-y-1 border-t border-gray-100 px-4 pb-4 pt-2 dark:border-gray-800 md:hidden">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "font-bold text-green-600"
                    : "font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            className="w-full rounded-xl font-semibold"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Button>
        </nav>
      )}
    </header>
  );
}
