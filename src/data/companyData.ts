import { StaticImageData } from "next/image";

import companyLogo from "@/src/assets/profileCompany/stripe-logo.png";
import gallery1 from "@/src/assets/profileCompany/gallery/photo1.jpg";
import gallery2 from "@/src/assets/profileCompany/gallery/photo2.jpg";
import gallery3 from "@/src/assets/profileCompany/gallery/photo3.jpg";

import profile1 from "@/src/assets/profileCompany/team/profile1.jpg";
import profile2 from "@/src/assets/profileCompany/team/profile2.jpg";
import profile3 from "@/src/assets/profileCompany/team/yulia.jpg";

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
};
