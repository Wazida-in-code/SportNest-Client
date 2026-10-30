"use client";

import { useState, type FormEvent } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type BookingFormProps = {
  facilityId: string;
  facilityName: string;
  price: string;
};

const BookingForm = ({ facilityId, facilityName, price }: BookingFormProps) => {
  const [duration, setDuration] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const hourlyRate = Number(price.replace(/[^0-9.]/g, ""));
  const total =
    Number.isFinite(hourlyRate) && hourlyRate > 0
      ? Number((hourlyRate * duration).toFixed(2))
      : null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const bookingData = {
      facilityId,
      facilityName,
      name: formData.get("name"),
      email: formData.get("email"),
      date: formData.get("date"),
      time: formData.get("time"),
      duration,
      totalPrice: total,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/facilities/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        },
      );

      if (!response.ok) {
        const errorBody = await response.text();
        let errorMessage = `Booking failed (${response.status}). Please try again.`;

        if (errorBody) {
          try {
            const errorData: unknown = JSON.parse(errorBody);
            if (
              typeof errorData === "object" &&
              errorData !== null &&
              "message" in errorData &&
              typeof errorData.message === "string"
            ) {
              errorMessage = errorData.message;
            }
          } catch {
            errorMessage = errorBody;
          }
        }

        throw new Error(errorMessage);
      }

      setMessage({
        type: "success",
        text: "Your booking request was submitted successfully.",
      });
      form.reset();
      setDuration(1);
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Unable to submit your booking. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label htmlFor="booking-name" className="text-sm font-medium">
          Your name
        </label>
        <Input
          id="booking-name"
          name="name"
          autoComplete="name"
          placeholder="Full name"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="booking-email" className="text-sm font-medium">
          Email address
        </label>
        <Input
          id="booking-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label htmlFor="booking-date" className="text-sm font-medium">
            Date
          </label>
          <Input id="booking-date" name="date" type="date" required />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="booking-time" className="text-sm font-medium">
            Start time
          </label>
          <Input id="booking-time" name="time" type="time" required />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="booking-duration" className="text-sm font-medium">
          Duration
        </label>
        <select
          id="booking-duration"
          name="duration"
          value={duration}
          onChange={(event) => setDuration(Number(event.target.value))}
          className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value={1}>1 hour</option>
          <option value={2}>2 hours</option>
          <option value={3}>3 hours</option>
        </select>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2 text-sm">
        <span className="text-muted-foreground">
          {facilityName} · {duration} {duration === 1 ? "hour" : "hours"}
        </span>
        <span className="font-semibold">
          {total === null ? "Price unavailable" : `$${total}`}
        </span>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || total === null}
        className="h-10 w-full gap-2 rounded-xl"
      >
        <CalendarDays className="size-4" />
        {isSubmitting ? "Submitting..." : "Book facility"}
      </Button>

      {message && (
        <p
          role={message.type === "error" ? "alert" : "status"}
          className={
            message.type === "error"
              ? "text-sm text-destructive"
              : "text-sm text-green-700"
          }
        >
          {message.text}
        </p>
      )}
    </form>
  );
};

export default BookingForm;