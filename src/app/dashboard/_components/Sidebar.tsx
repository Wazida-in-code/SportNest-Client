"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { dashboardLinks } from "@/lib/constants";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[260px] shrink-0 flex-col border-r border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      {/* Logo */}
      <div className="px-5 pb-5 pt-6">
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-green-600 shadow-lg shadow-green-600/25 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
            <Trophy className="size-5 text-white" />
          </span>
          <span>
            <span className="block font-heading text-xl font-extrabold tracking-tight">
              Sports<span className="text-green-600">Nest</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
              Dashboard
            </span>
          </span>
        </Link>
      </div>

      <div className="mx-4 h-px bg-gray-100 dark:bg-gray-800" />

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5">
        <p className="px-3 pb-3 text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Management
        </p>
        <ul className="space-y-1.5">
          {dashboardLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
                    active
                      ? "bg-green-50 font-bold text-green-700 dark:bg-green-950/40 dark:text-green-500"
                      : "font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100"
                  )}
                >
                  {active && (
                    <span className="absolute -left-3 top-1/2 h-6 w-1.5 -translate-y-1/2 rounded-r-full bg-green-600" />
                  )}
                  <link.icon
                    className={cn(
                      "size-[18px] shrink-0 transition-colors",
                      active
                        ? "text-green-600 dark:text-green-500"
                        : "text-gray-400 group-hover:text-green-600 dark:text-gray-500 dark:group-hover:text-green-500"
                    )}
                  />
                  {link.label}
                  {!active && (
                    <ArrowRight className="ml-auto size-4 -translate-x-1 text-gray-300 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-600" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
