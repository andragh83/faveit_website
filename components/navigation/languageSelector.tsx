"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./LanguageSelector.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import type { Language } from "@/lib/translations";

const languageObject = {
  en: {
    code: "en" as Language,
    name: "English",
    flag: "/images/flags/en.svg",
  },
  ro: {
    code: "ro" as Language,
    name: "Română",
    flag: "/images/flags/ro.svg",
  },
};

const languages = Object.values(languageObject);

export default function LanguageSelector({
  lang,
}: {
  lang: Language | undefined;
}) {
  // console.log("Rendering LanguageSelector");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle initial mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mounted]);

  const handleLanguageSelect = (language: (typeof languages)[0]) => {
    setIsOpen(false);
    const params = new URLSearchParams(searchParams);
    params.set("lang", language.code);
    router.push(`?${params.toString()}`);
  };

  // Use the prop directly instead of state
  const currentLang = lang || "en";
  const currentLanguage = languageObject[currentLang];

  return (
    <div className="relative" ref={dropdownRef}>
      {isOpen && (
        <div
          className={`absolute bottom-full md:bottom-auto md:top-full right-0 mb-2 md:mb-0 md:mt-2 w-48 bg-background rounded-lg shadow-lg overflow-hidden z-50 ${styles.dropdown}`}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-primaryLight transition-colors duration-200 ${
                currentLang === language.code ? "bg-primaryLight/50" : ""
              }`}
              type="button"
            >
              <Image
                src={language.flag}
                alt={language.name}
                width={20}
                height={20}
                className="rounded-sm pointer-events-none"
              />
              <span className="text-sm text-baseText">{language.name}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primaryLight transition-colors duration-200 z-50"
        type="button"
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          width={20}
          height={20}
          className="rounded-sm pointer-events-none"
        />
        <span className="text-sm text-baseText font-semibold pointer-events-none">
          {currentLanguage.name.toUpperCase()}
        </span>
      </button>
    </div>
  );
}
