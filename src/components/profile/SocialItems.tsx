import { siteData } from "@/src/data/data";
import Link from "next/link";
import { Sprite } from "../shared/Sprite";

const {
    profile: { socials },
} = siteData;

interface SocialItemsProps {
    socialList: Record<string, string>;
}

export const SocialItems = ({ socialList }: SocialItemsProps) => {
    return (
        <>
            <h3 className="subtitle mb-3">{socials}</h3>
            <ul className="flex flex-wrap gap-3 tablet:gap-4">
                {Object.entries(socialList).map(([key, value]) => (
                    <li key={key} className="inline-block">
                        <Link
                            href={`https://${value}`}
                            target="_blank"
                            className=" border text-primary border-current flex p-1 tablet:p-2 gap-2 tablet:gap-4 data link-actions"
                        >
                            <Sprite
                                name={`icon-${key}`}
                                className="size-5 tablet:size-6 fill-current"
                            />
                            <span>{value}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
