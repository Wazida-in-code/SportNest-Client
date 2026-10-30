'use client'
import { toast } from "@/components/ui/toast";
import { PlusCircle } from "lucide-react";
import { FormEvent } from "react";

const AddFacilityPage = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const facilityData = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/facilities`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(facilityData)
    })
    const result = await res.json();
    console.log(result);
    if (result.acknowledged) {
      toast.add({
        title: "Facility added successfully",
        description: "Your facility has been added to the platform.",
        type: "success",
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Add New Facility</h1>
        <p className="text-xs text-gray-500">
          List your sports venue for others to book
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          {/* Facility Name */}
          <div>
            <label
              htmlFor="facilityName"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-gray-600"
            >
              Facility Name *
            </label>
            <input
              id="facilityName"
              name="facilityName"
              type="text"
              placeholder="e.g. Green Turf Football Ground"
              className="h-9 w-full rounded-lg border border-gray-200 px-3 text-xs outline-none placeholder:text-gray-400 focus:border-green-500"
            />
          </div>

          {/* Sport Type */}
          <div>
            <label
              htmlFor="sportType"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-gray-600"
            >
              Sport Type *
            </label>
            <select
              id="sportType"
              name="sportType"
              className="h-9 w-full rounded-lg border border-gray-200 bg-white px-3 text-xs outline-none focus:border-green-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select Sport Type
              </option>
              <option value="football">Football</option>
              <option value="cricket">Cricket</option>
              <option value="badminton">Badminton</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Tennis</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="imageUrl"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-gray-600"
            >
              Image URL *
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="h-9 w-full rounded-lg border border-gray-200 px-3 text-xs outline-none placeholder:text-gray-400 focus:border-green-500"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-gray-600"
            >
              Location *
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="e.g. Gulshan, Dhaka"
              className="h-9 w-full rounded-lg border border-gray-200 px-3 text-xs outline-none placeholder:text-gray-400 focus:border-green-500"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-gray-600"
            >
              Price Per Hour ($) *
            </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="50"
              className="h-9 w-full rounded-lg border border-gray-200 px-3 text-xs outline-none placeholder:text-gray-400 focus:border-green-500"
            />
          </div>

          {/* Capacity */}
          <div>
            <label
              htmlFor="capacity"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-gray-600"
            >
              Capacity (Players) *
            </label>
            <input
              id="capacity"
              name="capacity"
              type="number"
              placeholder="22"
              className="h-9 w-full rounded-lg border border-gray-200 px-3 text-xs outline-none placeholder:text-gray-400 focus:border-green-500"
            />
          </div>
        </div>

        {/* Available Time Slots */}
        <div className="mt-5">
          <label
            htmlFor="timeSlot"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-gray-600"
          >
            Available Time Slots *
          </label>

          <div className="flex gap-2">
            <input
              id="timeSlot"
              name="timeSlot"
              type="text"
              placeholder="e.g. 08:00 AM - 09:00 AM"
              className="h-9 w-full rounded-lg border border-gray-200 px-3 text-xs outline-none placeholder:text-gray-400 focus:border-green-500"
            />

            <button
              type="button"
              className="flex h-9 w-11 shrink-0 items-center justify-center rounded-lg bg-green-600 text-white"
            >
              <PlusCircle size={15} />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label
            htmlFor="description"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-gray-600"
          >
            Description *
          </label>

          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Describe your facility..."
            className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none placeholder:text-gray-400 focus:border-green-500"
          />
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            className="h-[42px] w-full rounded-lg bg-green-600 px-9 text-xs font-bold text-white shadow-lg shadow-green-100 transition-colors hover:bg-green-700 sm:w-auto"
          >
            Add Facility
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFacilityPage;
