import companyLogo from "@/src/assets/profileCompany/stripe-logo.png";
import { StaticImageData } from "next/image";

interface CompanyDataType {
    logo: StaticImageData;
    name: string;
    total: string;
    webSite: string;
    phone: string;
    statistics: {
        [key: string]: string;
    };
    description: string;
    countries: string[];
}
export const companyData: CompanyDataType = {
    logo: companyLogo,
    name: "Stripe",
    total: "43 Поїздок",
    webSite: "https://stripe.com",
    phone: "+38 (073) 555 55 55",
    statistics: {
        experience: "Травень  31, 2011",
        employees: "4000+",
        industry: "8 бусів",
        services: "8 країн",
        location: "Львів",
    },
    description:
        "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
    countries: ["fr", "it", "de", "nl", "es", "Czechia", "lt", "pt"],
};
