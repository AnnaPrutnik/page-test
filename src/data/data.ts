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

export const renderData = {
    name: "Stripe",
    total: "43 Поїздок",
    webSite: "https://stripe.com",
    phone: "+38 (073) 555 55 55",
    statistics: {
        experience: "Травень  31, 2011",
        totalPassengers: "4000+",
        carPark: "8 бусів",
        services: "8 країн",
        location: "Львів",
    },
    description:
        "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
    countries: ["fr", "it", "de", "nl", "es", "Czechia", "lt", "pt"],
};
