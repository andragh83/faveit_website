import Logo from "@/components/icons/logo";
import Link from "next/link";
import TopGrid from "@/components/pageSections/topGrid";
import Pains from "@/components/pageSections/pains";
import SectionTitle from "@/components/sectionElements/title";
import wishlists from "@/public/images/sectionTitleImages/wishlists.jpg";
import gifts from "@/public/images/sectionTitleImages/gifts.jpg";
import {
  giftsFeaturesData,
  wishlistFeaturesData,
} from "@/components/localData/featuresData";
import Feature from "@/components/pageSections/feature";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <TopGrid />

      {/* Navigation */}
      <div className="absolute top-2 md:top-8 left-0 right-0 z-10">
        <nav className="max-w-4xl mx-auto flex gap-4 md:gap-8 items-center justify-center px-4">
          <Link
            className="uppercase text-[#343434] dark:text-white hover:opacity-70 transition-opacity text-xs md:text-base"
            href="/"
          >
            Wishlists
          </Link>
          <Link
            className="uppercase text-[#343434] dark:text-white hover:opacity-70 transition-opacity text-xs md:text-base"
            href="/about"
          >
            Give
          </Link>
          <Logo className="scale-75 md:scale-100" />
          <Link
            className="uppercase text-[#343434] dark:text-white hover:opacity-70 transition-opacity text-xs md:text-base"
            href="/contact"
          >
            Dev
          </Link>
          <Link
            className="uppercase text-[#343434] dark:text-white hover:opacity-70 transition-opacity text-xs md:text-base"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="absolute z-10 top-0 bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none">
        <div className="max-w-2xl text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#343434] dark:text-white">
            Create Your Perfect Gift Registry
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#343434]/80 dark:text-white/80 max-w-xl mx-auto">
            Share your wishlist with friends and family. Make gift-giving
            simple, meaningful, and organized.
          </p>
          <Link
            href="/create"
            className="inline-block bg-[#343434] dark:bg-white text-white dark:text-[#343434] 
              px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity
              transform hover:scale-105 duration-200 pointer-events-auto"
          >
            Start Your Wishlist
          </Link>
        </div>
      </div>
      <Pains />
      <SectionTitle
        title="Keep all your wishlists in one place."
        image={wishlists}
        imageAlt="Wishlists"
      />
      {wishlistFeaturesData.map((feature, i) => (
        <Feature
          key={feature.title}
          feature={feature}
          textPosition={i % 2 === 0 ? "left" : "right"}
          hasBackground={i % 2 === 0 ? false : true}
        />
      ))}
      <SectionTitle
        title="Find the perfect gift for your friends and loved ones!"
        image={gifts}
        imageAlt="Gifts"
      />
      {giftsFeaturesData.map((feature, i) => (
        <Feature
          key={feature.title}
          feature={feature}
          textPosition={i % 2 === 0 ? "left" : "right"}
          hasBackground={i % 2 === 0 ? false : true}
        />
      ))}
    </div>
  );
}
