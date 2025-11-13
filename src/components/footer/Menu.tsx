import Link from "next/link";
import { siteData } from "@/src/data/data";

const {
    footer: {
        menu: { client, cargoCompanies },
    },
} = siteData;

export const Menu = () => {
    return (
        <div className="flex gap-[50px]">
            <div>
                <Link
                    href={client.href}
                    className="footer-subtitle link-actions text-nowrap"
                >
                    {client.title}
                </Link>

                <ul className="flex flex-col gap-4">
                    {client.submenu.map(item => (
                        <li key={item.title}>
                            <Link
                                href={item.href}
                                className="data link-actions text-nowrap"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Link
                    href={cargoCompanies.href}
                    className="footer-subtitle link-actions text-nowrap"
                >
                    {cargoCompanies.title}
                </Link>

                <ul className="flex flex-col gap-[23px]">
                    {cargoCompanies.submenu.map(item => (
                        <li key={item.title}>
                            <Link
                                href={item.href}
                                className="data link-actions text-nowrap"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
