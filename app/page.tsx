import Hero from "@/components/marketing/hero"
import Navbar from "@/components/marketing/navbar"
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: "The Gold Standard of Events",
    description: "Curating elite experiences for the world's most discerning hosts.",
    images: ["https://images.pexels.com/photos/14703685/pexels-photo-14703685.jpeg"], // Ensure you have this in /public
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}
