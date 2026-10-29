export type Sport = {
  name: string;
  emoji: string;
  facilities: number;
  from: number;
  /** Tailwind tint classes for the sport card */
  tint: string;
  /** query param used by /facilities links */
  slug: string;
};

export type Facility = {
  id: string;
  name: string;
  sport: string;
  location: string;
  pricePerHour: number;
  rating: number;
  reviews: number;
  gradient: string;
  emoji: string;
  badge?: string;
  amenities: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  sport: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const popularSports: Sport[] = [
  {
    name: "Football",
    emoji: "⚽",
    facilities: 48,
    from: 25,
    slug: "football",
    tint: "border-green-100 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300",
  },
  {
    name: "Badminton",
    emoji: "🏸",
    facilities: 32,
    from: 15,
    slug: "badminton",
    tint: "border-yellow-100 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-300",
  },
  {
    name: "Tennis",
    emoji: "🎾",
    facilities: 28,
    from: 30,
    slug: "tennis",
    tint: "border-orange-100 bg-orange-50 text-orange-700 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-300",
  },
  {
    name: "Swimming",
    emoji: "🏊",
    facilities: 18,
    from: 12,
    slug: "swimming",
    tint: "border-cyan-100 bg-cyan-50 text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950 dark:text-cyan-300",
  },
  {
    name: "Basketball",
    emoji: "🏀",
    facilities: 36,
    from: 20,
    slug: "basketball",
    tint: "border-red-100 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
  },
  {
    name: "Cricket",
    emoji: "🏏",
    facilities: 22,
    from: 35,
    slug: "cricket",
    tint: "border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
  },
];

export const facilities: Facility[] = [
  {
    id: "green-field-arena",
    name: "Green Field Arena",
    sport: "Football",
    location: "Dhanmondi, Dhaka",
    pricePerHour: 45,
    rating: 4.8,
    reviews: 214,
    gradient: "from-emerald-500 to-teal-600",
    emoji: "⚽",
    badge: "Popular",
    amenities: ["Floodlights", "Changing Rooms", "Parking", "Café"],
  },
  {
    id: "hoop-city-court",
    name: "Hoop City Indoor Court",
    sport: "Basketball",
    location: "Gulshan, Dhaka",
    pricePerHour: 35,
    rating: 4.6,
    reviews: 156,
    gradient: "from-orange-500 to-rose-500",
    emoji: "🏀",
    badge: "Top Rated",
    amenities: ["Indoor", "Wooden Court", "Showers", "Locker Rooms"],
  },
  {
    id: "ace-tennis-club",
    name: "Ace Tennis Club",
    sport: "Tennis",
    location: "Bashundhara R/A, Dhaka",
    pricePerHour: 50,
    rating: 4.9,
    reviews: 189,
    gradient: "from-lime-500 to-emerald-600",
    emoji: "🎾",
    amenities: ["Clay Court", "Coaching", "Pro Shop", "Floodlights"],
  },
  {
    id: "shuttle-house",
    name: "Shuttle House Badminton",
    sport: "Badminton",
    location: "Uttara, Dhaka",
    pricePerHour: 22,
    rating: 4.5,
    reviews: 98,
    gradient: "from-sky-500 to-blue-600",
    emoji: "🏸",
    badge: "Best Value",
    amenities: ["4 Courts", "Equipment Rental", "Parking"],
  },
  {
    id: "aqua-splash-center",
    name: "Aqua Splash Swim Center",
    sport: "Swimming",
    location: "Mirpur, Dhaka",
    pricePerHour: 18,
    rating: 4.7,
    reviews: 143,
    gradient: "from-cyan-500 to-indigo-500",
    emoji: "🏊",
    amenities: ["Olympic Pool", "Lifeguard", "Kids Pool", "Showers"],
  },
  {
    name: "Cricket Nest Stadium",
    id: "cricket-nest-stadium",
    sport: "Cricket",
    location: "Sylhet",
    pricePerHour: 60,
    rating: 4.8,
    reviews: 231,
    gradient: "from-amber-500 to-orange-600",
    emoji: "🏏",
    badge: "Popular",
    amenities: ["Turf Pitch", "Net Practice", "Floodlights", "Parking"],
  },
  {
    id: "spike-arena",
    name: "Spike Volleyball Arena",
    sport: "Volleyball",
    location: "Chattogram",
    pricePerHour: 28,
    rating: 4.4,
    reviews: 76,
    gradient: "from-fuchsia-500 to-purple-600",
    emoji: "🏐",
    amenities: ["Sand Court", "Indoor Hall", "Coaching"],
  },
  {
    id: "ice-stick-hockey",
    name: "Ice & Stick Hockey Turf",
    sport: "Hockey",
    location: "Khulna",
    pricePerHour: 55,
    rating: 4.6,
    reviews: 64,
    gradient: "from-teal-500 to-cyan-600",
    emoji: "🏒",
    amenities: ["Astro Turf", "Floodlights", "Locker Rooms"],
  },
  {
    id: "urban-climbing-gym",
    name: "Urban Climbing Gym",
    sport: "Climbing",
    location: "Banani, Dhaka",
    pricePerHour: 30,
    rating: 4.7,
    reviews: 112,
    gradient: "from-rose-500 to-red-500",
    emoji: "🧗",
    badge: "New",
    amenities: ["Bouldering Wall", "Trainers", "Café"],
  },
];

export const featuredFacilities = facilities.slice(0, 6);

export const whyChooseUs = [
  {
    icon: "calendar",
    title: "Instant Booking",
    description:
      "Reserve your favourite sports facility in under 60 seconds, anytime, anywhere.",
    tint: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
  },
  {
    icon: "shield",
    title: "Secure & Reliable",
    description:
      "JWT-protected accounts and encrypted transactions keep your data safe.",
    tint: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
  },
  {
    icon: "award",
    title: "Premium Venues",
    description:
      "Hand-curated, top-quality sports facilities across the city.",
    tint: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
  },
] as const;

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rafiq Ahmed",
    role: "Football Player",
    sport: "Football",
    quote:
      "SportNest made booking our weekly matches incredibly easy. The slots are always available and the UI is super clean!",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Rafiq+Ahmed&background=16a34a&color=fff&bold=true",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Badminton Enthusiast",
    sport: "Badminton",
    quote:
      "I love how I can filter by sport type and find exactly the court I need. No more calling venues manually!",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Priya+Sharma&background=ea580c&color=fff&bold=true",
  },
  {
    id: "t3",
    name: "Karim Hassan",
    role: "Swimming Coach",
    sport: "Swimming",
    quote:
      "As a facility owner, managing bookings through SportNest has saved me hours every week. Highly recommended.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Karim+Hassan&background=0891b2&color=fff&bold=true",
  },
];

export const stats = [
  { value: "500+", label: "Facilities" },
  { value: "10K+", label: "Bookings" },
  { value: "6", label: "Sports" },
  { value: "4.9★", label: "Rating" },
];

export const heroImage =
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop";
