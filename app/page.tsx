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
import FindOutMore from "@/components/navigation/findOutMore";
import LanguageSelector from "@/components/navigation/languageSelector";
import { getTranslations } from "@/lib/getTranslations";
import { Language, translations } from "@/lib/translations";
import { ResolvingMetadata, Metadata } from "next";
import AppStoreBtn from "@/components/navigation/appStoreBtn";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const langSearchParam = (await searchParams)?.lang;

  const lang = langSearchParam
    ? typeof langSearchParam === "string"
      ? langSearchParam
      : langSearchParam[0]
    : "en";
  const t = translations[lang as Language];

  return {
    title: "FaveIT - " + t.hero.title,
    description: t.hero.subtitle1 + " " + t.hero.subtitle2,
    keywords: [
      lang === "ro"
        ? "listă de dorințe, cadouri, organizare cadouri, management cadouri, cadouri sociale, evenimente, cadouri evenimente, evenimente cadouri, prieteni, cadouri prieteni, evenimente cadouri prieteni, sf valentin, cadouri sf valentin, evenimente cadouri sf valentin, craciun, iepurasul de paste, cadouri iepurasul de paste, evenimente cadouri iepurasul de paste"
        : "gift registry, wishlist, gift giving, gift organization, gift management, social gifting, events, event gifts, event gift registry, friends, friend gifts, event friend gifts, valentine's day, valentine's day gifts, valentine's day gift registry, christmas, easter bunny, easter bunny gifts, christmas gifts",
    ],
    authors: [{ name: "FaveIT" }],
    openGraph: {
      title: "FaveIT - " + t.hero.title,
      description: t.hero.subtitle1 + " " + t.hero.subtitle2,
      type: "website",
      siteName: "FaveIT",
      images: [
        {
          url: "/images/faveit-logo.jpg",
          width: 800,
          height: 600,
          alt: "FaveIT Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "FaveIT - " + t.hero.title,
      description: t.hero.subtitle1 + " " + t.hero.subtitle2,
      creator: "@faveitapp",
      images: [
        {
          url: "/images/faveit-logo.jpg",
          width: 800,
          height: 600,
          alt: "FaveIT Logo",
        },
      ],
    },
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/?lang=en",
        "ro-RO": "/?lang=ro",
      },
    },
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const langSearchParam = (await searchParams).lang;
  const lang = langSearchParam
    ? typeof langSearchParam === "string"
      ? langSearchParam
      : langSearchParam[0]
    : "en";

  const t =
    lang && lang === "ro" ? getTranslations("ro") : getTranslations("en");

  // console.log("Rendering Home");

  return (
    <div id="top-page" className="relative overflow-x-hidden">
      <div className="fixed bottom-4 md:bottom-auto md:top-4 right-4 z-[51]">
        <LanguageSelector lang={lang as Language} />
      </div>
      <TopGrid />
      <Navigation lang={lang as Language} />

      {/* Hero Content */}
      <div className="absolute z-10 top-0 h-screen left-0 right-0 flex items-center justify-center pointer-events-none pb-6">
        <div className="max-w-[400px] md:max-w-[600px] lg:max-w-3xl text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-baseText max-w-[100%] uppercase mx-auto !leading-tight">
            {t.hero.title}
          </h1>
          <p
            className={`text-md md:text-xl mb-8 text-baseText/80 max-w-[260px] md:max-w-[60%] mx-auto`}
          >
            <span className="font-bold">{t.hero.subtitle1}</span>
            <br />
            <br />
            {t.hero.subtitle2}
          </p>
          <div>
            <div className="w-full flex items-center justify-center gap-4">
              <FindOutMore text={t.hero.cta} />
              <AppStoreBtn url="https://apps.apple.com/app/faveit/id6753879405" />
            </div>
          </div>
        </div>
      </div>
      <div id="pains">
        <Pains lang={lang as Language} />
      </div>
      <div id="wishlists">
        <SectionTitle
          title={t.sections.wishlists}
          image={wishlists}
          imageAlt="Wishlists"
        />
        {wishlistFeaturesData(lang as Language).map((feature, i) => (
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
          title={t.sections.gifts}
          image={gifts}
          imageAlt={t.sections.gifts}
        />
        {giftsFeaturesData(lang as Language).map((feature, i) => (
          <Feature
            key={feature.title}
            feature={feature}
            textPosition={i % 2 === 0 ? "left" : "right"}
            hasBackground={i % 2 === 0 ? false : true}
          />
        ))}
      </div>
      <div id="dev">
        <DeveloperSection lang={lang as Language} />
      </div>
      <div id="contact">
        <FormSection lang={lang as Language} />
      </div>
      <div className="flex items-center justify-center py-6 text-sm text-textLighter">
        © FaveIT 2025
      </div>
    </div>
  );
}
