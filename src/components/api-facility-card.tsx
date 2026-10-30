import Link from "next/link";
import { Clock3, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

/** Facility as returned by the backend (`GET /facilities`). */
export type ApiFacility = {
  _id: string;
  facilityName: string;
  sportType: string;
  imageUrl: string;
  location: string;
  price: string;
  capacity: string;
  timeSlot: string;
  description: string;
};

export function ApiFacilityCard({ facility }: { facility: ApiFacility }) {
  return (
    <Card className="gap-0 overflow-hidden py-0">
      <div className="relative h-44 bg-gradient-to-br from-green-500 to-emerald-600">
        <img
          src={facility.imageUrl}
          alt={facility.facilityName}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <Badge
          className="absolute top-3 left-3 bg-background/90 text-foreground capitalize"
          variant="secondary"
        >
          {facility.sportType}
        </Badge>
      </div>

      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-heading text-base font-semibold">
          {facility.facilityName}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {facility.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5 shrink-0" />
            {facility.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 className="size-3.5 shrink-0" />
            {facility.timeSlot}
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5 shrink-0" />
            {facility.capacity} players
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border/60 bg-background p-4">
        <p className="text-sm">
          <span className="font-heading text-lg font-semibold">
            ${facility.price}
          </span>
          <span className="text-muted-foreground">/hour</span>
        </p>
        <Button
          size="sm"
          nativeButton={false}
          render={<Link href={`/facilities/${facility._id}`} />}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
