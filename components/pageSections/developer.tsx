import Image from "next/image";
import { FC } from "react";
import WebsiteIcon from "../icons/website";
import LinkedinIcon from "../icons/linkedin";
import GithubIcon from "../icons/github";
import InstaIcon from "../icons/insta";
import imageUrl from "@/public/images/andragh.jpg";
import { Language } from "@/lib/translations";

const DeveloperSection: FC<{ lang: Language | undefined }> = ({ lang }) => {
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
          {lang === "ro" ? "Salut! Eu sunt Andra" : "Hi! I'm Andra"}
        </h2>
        <div className="flex flex-col gap-4 mb-8 max-w-xl">
          <p className="text-lg md:text-xl text-textLighter ">
            {lang === "ro"
              ? "Mă bucur că ești aici și că proiectul meu ți-a trezit curiozitatea! Am creat FaveIT pentru a rezolva o nevoie cu care m-am confruntat eu însămi de-a lungul timpului și sper că vei găsi și tu o utilitate pentru el!"
              : "Thank you for being here and checking out my project! I've created FaveIT to fill a need that I had, to use it myself and I hope you will find a use for it too!"}
          </p>
          <p className="text-md md:text-lg text-textLighter">
            {lang === "ro"
              ? "Mereu mi-a fost greu să aleg ce să cumpăr pentru cei dragi, pentru prieteni și pentru oricine, de fapt. De ceva timp încoace, am devenit convinsă că tehnologia ar putea rezolva ușor această problemă așa că per să te bucuri de FaveIT și să te ajute să primeși și să oferi cadori memorabile!"
              : "I have always struggled with choosing what to get for loved ones, friends and anyone really. And for some time now I’ve became convinced that technology could easily solve this problem. Hope you'll enjoy using FaveIT!"}
          </p>
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
