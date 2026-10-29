import Link from "next/link";
import { Clock3, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Facility } from "@/lib/data";

export function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <Card className="gap-0 py-0">
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${facility.gradient}`}
      >
        <span className="text-6xl drop-shadow-lg">{facility.emoji}</span>
        {facility.badge ? (
          <Badge
            className="absolute top-3 left-3 bg-background/90 text-foreground"
            variant="secondary"
          >
            {facility.badge}
          </Badge>
        ) : null}
      </div>

      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-base font-semibold">
            {facility.name}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-medium">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            {facility.rating}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5" />
            {facility.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 className="size-3.5" />
            {facility.reviews} reviews
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {facility.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="outline" className="font-normal">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border/60 bg-background p-4">
        <p className="text-sm">
          <span className="font-heading text-lg font-semibold">
            ${facility.pricePerHour}
          </span>
          <span className="text-muted-foreground">/hour</span>
        </p>
        <Button size="sm" nativeButton={false} render={<Link href="/facilities" />}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
