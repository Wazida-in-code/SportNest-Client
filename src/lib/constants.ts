import { Building, CalendarDays, CirclePlus } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Facilities", href: "/facilities" },
] as const;

export const dashboardLinks = [
  { label: "Add Facility", href: "/dashboard/add-facility", icon: CirclePlus },
  { label: "My Bookings", href: "/dashboard/my-bookings", icon: CalendarDays },
  { label: "My Facilities", href: "/dashboard/my-facility", icon: Building },
] as const;

export const footerLinks = {
  quick: [
    { label: "All Facilities", href: "/facilities" },
    { label: "Home", href: "/" },
    { label: "Popular Sports", href: "/#sports" },
    { label: "Why Us", href: "/#why-us" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Cancellation Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  sports: [
    { label: "Football", href: "/facilities?sport=football" },
    { label: "Badminton", href: "/facilities?sport=badminton" },
    { label: "Tennis", href: "/facilities?sport=tennis" },
    { label: "Swimming", href: "/facilities?sport=swimming" },
    { label: "Basketball", href: "/facilities?sport=basketball" },
    { label: "Cricket", href: "/facilities?sport=cricket" },
  ],
} as const;
