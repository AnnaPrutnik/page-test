import Link from "next/link";
import { Sprite } from "../shared/Sprite";

interface ContactProps {
    phone: string;
    webSite: string;
}

export const Contacts = ({ phone, webSite }: ContactProps) => {
    return (
        <ul className="text-primary font-semibold flex flex-col tablet:flex-row  tablet:gap-5 desktop:gap-8 text-small tablet:text-normal">
            <li>
                <Link
                    href={webSite}
                    target="_blank"
                    className="flex gap-1 items-center"
                >
                    <Sprite
                        name="icon-website"
                        className="fill-transparent stroke-current  size-5 tablet:size-6"
                    />
                    {webSite}
                </Link>
            </li>
            <li>
                <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="flex gap-1 items-center"
                >
                    <Sprite
                        name="icon-phone"
                        className="fill-current size-5 tablet:size-6"
                    />
                    {phone}
                </a>
            </li>
        </ul>
    );
};
