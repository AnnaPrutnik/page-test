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

    description: "Опис перевізника",
    services: "Обслуговуємо країни",

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

export const availableCountries = [
    { title: "Франція", value: "fr", flag: fr },
    { title: "Італія", value: "it", flag: it },
    { title: "Німеччина", value: "de", flag: de },
    { title: "Нідерланди", value: "nl", flag: nl },
    { title: "Іспанія", value: "es", flag: es },
    { title: "Чехія", value: "cz", flag: cz },
    { title: "Литва", value: "lt", flag: lt },
    { title: "Португалія", value: "pt", flag: pt },
];
