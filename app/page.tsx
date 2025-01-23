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
import { Language } from "@/lib/translations";

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
      <Navigation />

      {/* Hero Content */}
      <div className="absolute z-10 top-0 h-screen left-0 right-0 flex items-center justify-center pointer-events-none">
        <div className="max-w-2xl text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6 text-baseText">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-baseText/80 max-w-xl mx-auto">
            {t.hero.subtitle1}
            <br />
            {t.hero.subtitle2}
          </p>
          <FindOutMore text={t.hero.cta} />
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
