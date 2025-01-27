import Image from "next/image";
import { FC } from "react";
import WebsiteIcon from "../icons/website";
import LinkedinIcon from "../icons/linkedin";
import GithubIcon from "../icons/github";
import InstaIcon from "../icons/insta";
import imageUrl from "@/public/images/andragh.jpg";
import { Language } from "@/lib/translations";
import { getTranslations } from "@/lib/getTranslations";

const DeveloperSection: FC<{ lang: Language | undefined }> = ({ lang }) => {
  // console.log("Rendering DeveloperSection");
  const t =
    lang && lang === "ro" ? getTranslations("ro") : getTranslations("en");
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-primaryLight">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8">
          <Image
            src={imageUrl}
            alt="Developer profile"
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-baseText">
          {t.dev.greeting}
        </h2>
        <div className="flex flex-col gap-4 mb-8 max-w-xl">
          <p className="text-md md:text-lg text-textLighter ">{t.dev.intro}</p>
          <p className="text-md md:text-lg text-textLighter">{t.dev.story}</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://andragh.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <WebsiteIcon size={16} />
          </a>

          <a
            href=" https://www.linkedin.com/in/andra-ghitulescu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <LinkedinIcon size={14} />
          </a>

          <a
            href=" https://github.com/andragh83"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href="https://www.instagram.com/andragh83"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <InstaIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
