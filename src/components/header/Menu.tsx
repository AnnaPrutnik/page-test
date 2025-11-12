import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { siteData } from "@/src/data/data";

const { navigation } = siteData;

export const Menu = () => {
    return (
        <ul className="flex flex-col desktop:flex-row gap-10 desktop:gap-6">
            {navigation.map(item => (
                <li key={item.id} className="block">
                    <Link
                        href={item.href}
                        className={twMerge(
                            "text-normal font-semibold relative after:absolute after:left-0 after:bottom-0 after:h-1 after:right-0 pt-2 pb-7 hover:text-accent-blue hover:after:bg-accent-blue transition-colors duration-300 after:transition-colors after:duration-300",
                            item.active
                                ? "text-primary after:bg-primary"
                                : "text-neutrals-80"
                        )}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
