import { Banner } from "@/app/(root)/home/banner";
import { PopularSports } from "@/app/(root)/home/popular-sports";
import { FeaturedFacilities } from "@/app/(root)/home/featured-facilities";
import { WhyChooseUs } from "@/app/(root)/home/why-choose-us";
import { Testimonials } from "@/app/(root)/home/testimonials";
import { CallToAction } from "@/app/(root)/home/call-to-action";

export default function Home() {
  return (
    <>
      <Banner />
      <PopularSports />
      <FeaturedFacilities />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
