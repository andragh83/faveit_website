import DeveloperSection from "@/components/pageSections/developer";
import FormSection from "@/components/pageSections/form";
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
import Navigation from "@/components/navigation/nav";
import Link from "next/link";
import FindOutMore from "@/components/navigation/findOutMore";

export default function Home() {
  return (
    <div id="top-page" className="relative overflow-x-hidden">
      <TopGrid />
      <Navigation />

      {/* Hero Content */}
      <div className="absolute z-10 top-0 h-screen left-0 right-0 flex items-center justify-center pointer-events-none">
        <div className="max-w-2xl text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-baseText">
            Create Your Perfect Gift Registry
          </h1>
          <p className="text-lg md:text-xl mb-8 text-baseText/80 max-w-xl mx-auto">
            Share your wishlist with friends and family. Make gift-giving
            simple, meaningful, and organized.
          </p>
          <FindOutMore />
        </div>
      </div>
      <div id="pains">
        <Pains />
      </div>
      <div id="wishlists">
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
      </div>
      <div id="gifts">
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
      <div id="dev">
        <DeveloperSection />
      </div>
      <div id="contact">
        <FormSection />
      </div>
      <div className="flex items-center justify-center py-6 text-sm text-textLighter">
        © FaveIT 2025
      </div>
    </div>
  );
}
