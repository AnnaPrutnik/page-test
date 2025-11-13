import { StaticImageData } from "next/image";

import companyLogo from "@/src/assets/profileCompany/stripe-logo.png";
import gallery1 from "@/src/assets/profileCompany/gallery/photo1.jpg";
import gallery2 from "@/src/assets/profileCompany/gallery/photo2.jpg";
import gallery3 from "@/src/assets/profileCompany/gallery/photo3.jpg";

import profile1 from "@/src/assets/profileCompany/team/profile1.jpg";
import profile2 from "@/src/assets/profileCompany/team/profile2.jpg";
import profile3 from "@/src/assets/profileCompany/team/yulia.jpg";

import feedbackAvatar1 from "@/src/assets/profileCompany/reviews/avatar1.jpg";
import feedbackAvatar2 from "@/src/assets/profileCompany/reviews/avatar2.jpg";

import { AvailableCountryCode } from "./data";
import { AvailableBenefitsCode } from "./data";

export type GalleryItemType = {
    alt: string;
    href: StaticImageData;
    top: number;
};

export type TeammateType = {
    name: string;
    experience: number;
    avatar: StaticImageData;
    socials: {
        instagram: string;
        linkedin: string;
    };
};

export type TestimonialType = {
    name: string;
    avatar: StaticImageData;
    route: string;
    text: string;
    rate: number;
    date: string;
};

interface CompanyDataType {
    logo: StaticImageData;
    name: string;
    total: string;
    webSite: string;
    phone: string;
    statistics: Record<string, string>;
    description: string;
    countries: AvailableCountryCode[];
    socials: Record<string, string>;
    gallery: GalleryItemType[];
    availableDates: Date[];
    team: TeammateType[];
    availableBenefits: AvailableBenefitsCode[];
    testimonials: TestimonialType[];
}
export const companyData: CompanyDataType = {
    logo: companyLogo,
    name: "Stripe",
    total: "43 Поїздок",
    webSite: "https://stripe.com",
    phone: "+38 (073) 555 55 55",
    socials: {
        twitter: "twitter.com/stripe",
        facebook: "facebook.com/StripeHQ",
    },
    statistics: {
        experience: "Травень  31, 2011",
        employees: "4000+",
        industry: "8 бусів",
        services: "8 країн",
        location: "Львів",
    },
    gallery: [
        { alt: "Бус 1 для перевезень", href: gallery1, top: 68 },
        { alt: "Бус 2 для перевезень", href: gallery2, top: 80 },
        { alt: "Бус 3 для перевезень", href: gallery3, top: 65 },
    ],
    description:
        "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
    countries: ["fr", "it", "de", "nl", "es", "cz", "lt", "pt"],
    availableDates: [
        new Date(2025, 10, 2),
        new Date(2025, 10, 4),
        new Date(2025, 10, 20),
        new Date(2025, 10, 24),
    ],
    team: [
        {
            name: "Олександр",
            avatar: profile1,
            experience: 5,
            socials: {
                instagram: "https://www.instagram.com/taylorswift/",
                linkedin: "https://www.linkedin.com/in/anna-prutnik/",
            },
        },
        {
            name: "Володимир",
            avatar: profile2,
            experience: 7,
            socials: {
                instagram: "https://www.instagram.com/taylorswift/",
                linkedin: "https://www.linkedin.com/in/anna-prutnik/",
            },
        },
        {
            name: "Ірина",
            avatar: profile1,
            experience: 1,
            socials: {
                instagram: "https://www.instagram.com/taylorswift/",
                linkedin: "https://www.linkedin.com/in/anna-prutnik/",
            },
        },
        {
            name: "Михайло",
            avatar: profile2,
            experience: 1,
            socials: {
                instagram: "https://www.instagram.com/taylorswift/",
                linkedin: "https://www.linkedin.com/in/anna-prutnik/",
            },
        },
        {
            name: "Юлія",
            avatar: profile3,
            experience: 2,
            socials: {
                instagram: "https://www.instagram.com/taylorswift/",
                linkedin: "https://www.linkedin.com/in/anna-prutnik/",
            },
        },
        {
            name: "Патрік",
            avatar: profile1,
            experience: 4,
            socials: {
                instagram: "https://www.instagram.com/taylorswift/",
                linkedin: "https://www.linkedin.com/in/anna-prutnik/",
            },
        },
        {
            name: "Катерина",
            avatar: profile2,
            experience: 3,
            socials: {
                instagram: "https://www.instagram.com/taylorswift/",
                linkedin: "https://www.linkedin.com/in/anna-prutnik/",
            },
        },
    ],
    availableBenefits: ["mode", "wifi", "tv", "wc", "seats", "pets"],
    testimonials: [
        {
            name: "Ben Yardley",
            avatar: feedbackAvatar1,
            route: "Київ - Кишинів",
            date: "1 May 2023",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            rate: 5,
        },
        {
            name: "Craig Martin",
            avatar: feedbackAvatar2,
            route: "Львів - Париж",
            date: "1 May 2023",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            rate: 5,
        },
        {
            name: "Emily Johnson",
            avatar: feedbackAvatar1,
            route: "Київ - Берлін",
            date: "12 March 2023",
            text: "Подорож пройшла чудово! Комфортні місця, чиста машина, приємний водій. Все на високому рівні — обов’язково скористаюсь знову.",
            rate: 5,
        },
        {
            name: "Andriy Petrenko",
            avatar: feedbackAvatar2,
            route: "Варшава - Прага",
            date: "7 June 2023",
            text: "Дуже зручно, що можна швидко знайти потрібний рейс. Автомобіль сучасний, а сервіс бездоганний. Рекомендую!",
            rate: 4,
        },
        {
            name: "Sophie Laurent",
            avatar: feedbackAvatar1,
            route: "Париж - Амстердам",
            date: "20 July 2023",
            text: "Все сподобалось — пунктуальність, комфорт і чудовий настрій у дорозі. Дякую за якісну організацію!",
            rate: 5,
        },
        {
            name: "Oleh Hnatyuk",
            avatar: feedbackAvatar2,
            route: "Краків - Відень",
            date: "2 August 2023",
            text: "Водій професійний і ввічливий, поїздка була швидкою та приємною. Єдине — хотілося б трохи більше простору для ніг.",
            rate: 4,
        },
        {
            name: "Laura Schmidt",
            avatar: feedbackAvatar1,
            route: "Берлін - Амстердам",
            date: "15 September 2023",
            text: "Автомобіль у відмінному стані, поїздка комфортна. Гарна комунікація з водієм, все організовано чудово.",
            rate: 5,
        },
        {
            name: "Ivan Kovalenko",
            avatar: feedbackAvatar2,
            route: "Прага - Париж",
            date: "29 October 2023",
            text: "Сервіс приємно здивував — усе чітко по часу, гарний настрій і комфорт протягом усього маршруту.",
            rate: 5,
        },
        {
            name: "Clara Rossi",
            avatar: feedbackAvatar1,
            route: "Мілан - Венеція",
            date: "10 November 2023",
            text: "Дуже зручно подорожувати таким способом. Водій привітний, машина чиста, музика приємна — ідеально!",
            rate: 5,
        },
        {
            name: "Taras Danylchuk",
            avatar: feedbackAvatar2,
            route: "Львів - Варшава",
            date: "5 December 2023",
            text: "Дорога пройшла спокійно. Авто нове, сервіс приємний. Трохи затримались на кордоні, але це не залежало від компанії.",
            rate: 4,
        },
        {
            name: "Maria Gonzalez",
            avatar: feedbackAvatar1,
            route: "Барселона - Мадрид",
            date: "9 January 2024",
            text: "Все чудово організовано, чистота, порядок і комфорт. Рекомендую тим, хто цінує якісний сервіс!",
            rate: 5,
        },
        {
            name: "Dmytro Sydorenko",
            avatar: feedbackAvatar2,
            route: "Київ - Вільнюс",
            date: "18 February 2024",
            text: "Поїздка пройшла ідеально. Дуже задоволений сервісом, атмосферою та швидкістю. Дякую за чудовий досвід!",
            rate: 5,
        },
    ],
};
