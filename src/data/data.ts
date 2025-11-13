import fr from "@/src/assets/flags/fr.jpg";
import cz from "@/src/assets/flags/cz.jpg";
import de from "@/src/assets/flags/de.jpg";
import es from "@/src/assets/flags/es.jpg";
import it from "@/src/assets/flags/it.jpg";
import nl from "@/src/assets/flags/nl.jpg";
import lt from "@/src/assets/flags/lt.png";
import pt from "@/src/assets/flags/pr.jpg";
import logoHeader from "@/src/assets/images/logo-header.png";
import logoFooter from "@/src/assets/images/logo-footer.png";

export const siteData = {
    logo: {
        header: {
            src: logoHeader,
            alt: "logo Printers Перевізники Європи",
        },
    },
    buttonTitles: {
        create: "Створити профіль",
        login: "Увійти",
        buyTicket: "Купити квиток",
        leaveFeedback: "Залишити відгук",
        send: "Надіслати",
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

    testimonials: {
        title: "Що *accent*кажуть люди?*/accent*",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    footer: {
        logo: logoFooter,
        text: "Платформа пошуку перевізників та бронювання поїздок",
        menu: {
            client: {
                title: "Клієнтам",
                href: "#",
                submenu: [
                    {
                        title: "Головна",
                        href: "#",
                    },
                    {
                        title: "Про нас",
                        href: "#",
                    },
                    {
                        title: "Ціни",
                        href: "#",
                    },
                    {
                        title: "Маршрути",
                        href: "#",
                    },
                    {
                        title: "Політика приватності",
                        href: "#",
                    },
                ],
            },
            cargoCompanies: {
                title: "Перевізникам",
                href: "#",
                submenu: [
                    {
                        title: "Help Docs",
                        href: "#",
                    },

                    {
                        title: "Особистий кабінет",
                        href: "#",
                    },
                    {
                        title: "Оновлення",
                        href: "#",
                    },
                    {
                        title: "Контакти",
                        href: "#",
                    },
                ],
            },
        },
        feedback: {
            title: "Зворотній зв’язок",
            text: "Маєш пропозиції щодо покращення сервісу - пиши нам!",
            placeholder: "Email Address",
            phone: "+ 38 (073) 555 55 55",
            email: "gmail@gmail.com",
        },
        copyright: "2024 @ Sprinters. All rights reserved.",
        socials: {
            facebook: "https://www.facebook.com/worldofdance",
            instagram: "https://www.instagram.com/word_of_dance19/",
            dribbble:
                "https://dribbble.com/shots/26765480-MoonRow-Ticket-Sales-Analytics-Mobile-Apps",
            linkedin: "https://www.linkedin.com/company/yellowduckcoders/",
            twitter: "https://x.com/stripe",
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
