import fr from "@/src/assets/flags/fr.jpg";
import cz from "@/src/assets/flags/cz.jpg";
import de from "@/src/assets/flags/de.jpg";
import es from "@/src/assets/flags/es.jpg";
import it from "@/src/assets/flags/it.jpg";
import nl from "@/src/assets/flags/nl.jpg";
import lt from "@/src/assets/flags/lt.png";
import pt from "@/src/assets/flags/pr.jpg";
import logo from "@/src/assets/images/logo-header.png";

export const siteData = {
    logo: {
        header: {
            src: logo,
            alt: "logo Printers Перевізники Європи",
        },
    },
    buttonTitles: {
        create: "Створити профіль",
        login: "Увійти",
        buyTicket: "Купити квиток",
    },
    ariaLabels: {
        create: "Створити профіль",
        login: "Увійти",
        burgerOpen: "Відкрити мобільне меню",
        burgerClose: "Закрити мобільне меню",
    },
    navigation: [
        {
            id: "home",
            href: "#",
            title: "Головна",
        },
        {
            id: "companies",
            href: "#",
            title: "Перевізникам",
        },
        {
            id: "about",
            href: "#",
            title: "Про нас",
        },
        {
            id: "profile",
            href: "/",
            title: "Профіль перевізника",
            active: true,
        },
    ],
    breadcrumbs: ["Головна", "Профіль перевізника", "Stripe"],

    profile: {
        title: "Профайл компанії",
        description: "Опис перевізника",
        services: "Обслуговуємо країни",
        socials: "Ми у соц. мережах",
        calendar: "Календар поїздок",
        allCountries: "Усі країни",
        gallery: "Галерея зображень",
    },
    team: {
        title: "Наші водії",
        allTeam: "Усі водії",
        experienceTitle: "Досвід роботи:",
    },

    benefits: {
        title: "Сервіс",
        description: "Найкращі умови для вашого комфорту",
    },

    statistics: {
        experience: {
            title: "На ринку від:",
            icon: "fire",
        },
        employees: {
            title: "Перевезених пасажирів",
            icon: "people",
        },
        industry: {
            title: "Автопарк",
            icon: "bus",
        },
        services: {
            title: "Обслуговуємо",
            icon: "location",
        },
        location: {
            title: "Місто",
            icon: "city",
        },
    },
};

export const availableCountries = {
    fr: { title: "Франція", value: "fr", flag: fr },
    it: { title: "Італія", value: "it", flag: it },
    de: { title: "Німеччина", value: "de", flag: de },
    nl: { title: "Нідерланди", value: "nl", flag: nl },
    es: { title: "Іспанія", value: "es", flag: es },
    cz: { title: "Чехія", value: "cz", flag: cz },
    lt: { title: "Литва", value: "lt", flag: lt },
    pt: { title: "Португалія", value: "pt", flag: pt },
} as const;

export type AvailableCountryCode = keyof typeof availableCountries;

export const availableBenefitsList = {
    mode: {
        title: "Кондиціонер",
        icon: "mode-fan",
    },
    tv: {
        title: "TV",
        icon: "tv",
    },
    wifi: {
        title: "Wi-Fi",
        icon: "wifi",
    },
    wc: { title: "Туалет", icon: "wc" },
    seats: { title: "Зручні сидіння", icon: "sofa" },
    pets: { title: "Перевозимо тварин", icon: "animals" },
} as const;

export type AvailableBenefitsCode = keyof typeof availableBenefitsList;
