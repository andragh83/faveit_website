import add_1 from "@/public/images/screenshots/add_1.png";
import add_2 from "@/public/images/screenshots/add_2.png";
import add_3 from "@/public/images/screenshots/add_3.png";
import collections_1 from "@/public/images/screenshots/collections_1.png";
import collections_2 from "@/public/images/screenshots/collections_2.png";
import collections_3 from "@/public/images/screenshots/collections_3.png";
import share_1 from "@/public/images/screenshots/share_1.png";
import share_2 from "@/public/images/screenshots/share_2.png";
import share_3 from "@/public/images/screenshots/share_3.png";
import add_friend_1 from "@/public/images/screenshots/add_friend_1.png";
import add_friend_2 from "@/public/images/screenshots/add_friend_2.png";
import add_friend_3 from "@/public/images/screenshots/add_friend_3.png";
import groups_1 from "@/public/images/screenshots/groups_1.png";
import groups_2 from "@/public/images/screenshots/groups_2.png";
import groups_3 from "@/public/images/screenshots/groups_3.png";
import gift_1 from "@/public/images/screenshots/gift_1.png";
import gift_2 from "@/public/images/screenshots/gift_2.png";
import gift_3 from "@/public/images/screenshots/gift_3.png";
import { Language } from "@/lib/translations";

export const wishlistFeaturesData = (lang: Language | undefined) => [
  {
    title: lang === "ro" ? "Salvează FAVE-uri" : "Save your FAVEs",
    icon: "add",
    actions: [
      lang === "ro"
        ? "Găsește lucruri care îți plac online sau în magazin"
        : "Find things you like online or in-store",
      lang === "ro"
        ? "Copiază adresa de internet și adaug-o în aplicația FaveIT sau fă o fotografie"
        : "Copy their URLs or take a photo",
      lang === "ro"
        ? "Editează-ți FAVE-urile și arhivează-le după ce le-ai primit sau după ce le-ai cumpărat"
        : "Edit your FAVEs and archive them when you receive them as gifts or when you buy them yourself",
    ],
    screenshots: [add_1, add_2, add_3],
  },
  {
    title: lang === "ro" ? "Crează colecții" : "Create collections",
    icon: "collections",
    actions: [
      lang === "ro"
        ? "Grupează-ți FAVE-urile in colecții pentru a te organiza mai bine"
        : "Add your FAVEs to collections for easier browsing and to stay organised",
      lang === "ro"
        ? "Numește-ți colecțiile după cum dorești"
        : "Name your collections meaningfully",
      lang === "ro" ? "Editați colecțiile" : "Edit your collections",
    ],
    screenshots: [collections_1, collections_2, collections_3],
  },
  {
    title: lang === "ro" ? "Distribuiți FAVE-uri" : "Share your FAVEs",
    icon: "share",
    actions: [
      lang === "ro"
        ? "Invită-ți prietenii și pe cei dragi să-și facă un cont pe FaveIT"
        : "Invite your friends and loved ones to create an account on FaveIT",
      lang === "ro"
        ? "Dă-le acess la FAVE-urile tale"
        : "Share your FAVEs with them",
      lang === "ro"
        ? "Tu contolezi cine vede ce"
        : "You're in complete control of who sees what",
    ],
    screenshots: [share_1, share_2, share_3],
  },
];

export const giftsFeaturesData = (lang: Language | undefined) => [
  {
    title: lang === "ro" ? "Adaugă prieteni" : "Add friends on FaveIT",
    icon: "add_friend",
    actions: [
      lang === "ro"
        ? "Adaugă-ți cunoscuții și pe cei dragi ca prieteni pe FaveIT"
        : "Find your friends and loved ones on FaveIT",
      lang === "ro"
        ? "Accesează-le profilul și fii la curent cu evenimentele lor importante"
        : "View their FaveIT profile and stay up to date with their important dates and FAVEs",
      lang === "ro"
        ? "Accesează-le FAVE-urile si caută cadoul potrivit"
        : "Browse your friends' FAVEs and find the perfect gift",
    ],
    screenshots: [add_friend_1, add_friend_2, add_friend_3],
  },
  {
    title: lang === "ro" ? "Creează grupuri" : "Create groups",
    icon: "groups",
    actions: [
      lang === "ro"
        ? "Grupează-ți prietenii pentru a le share-ui mai ușor FAVE-urile tale"
        : "Create groups with your friends and family",
      lang === "ro"
        ? "Poți distribui FAVE-uri direct unui prieten sau către un grup de prieteni"
        : "Share your FAVEs with your group",
      lang === "ro"
        ? "Administrează grupurile și rămâi în control"
        : "Stay organised and in control of your groups",
    ],
    screenshots: [groups_1, groups_2, groups_3],
  },
  {
    title: lang === "ro" ? "Găsește cadoul perfect" : "Find the perfect gift",
    icon: "gift",
    actions: [
      lang === "ro"
        ? "Caută printre FAVE-urile prietenilor tăi pentru a găsi cadoul ce se încadrează în bugetul perfect sau care se potrivește ocaziei"
        : "Search through your friends' FAVEs for the perfect fit",
      lang === "ro"
        ? "Poți căuta după preț, magazin, categorie, culoare și multe altele"
        : "You can filter by price, colour, shop, category and more",
      lang === "ro"
        ? "Surprinde-ți prietenii cu ceva ce într-adevăr doresc!"
        : "Surprise them with something they really want!",
    ],
    screenshots: [gift_1, gift_2, gift_3],
  },
];
