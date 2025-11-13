import Link from "next/link";
import { Sprite } from "../shared/Sprite";
import { siteData } from "@/src/data/data";

const {
    footer: { copyright, socials },
} = siteData;

export const BottomPart = () => {
    return (
        <div className="flex flex-col gap-5 desktop:flex-row justify-between py-4 desktop:py-10">
            <p className="data text-neutrals-0 opacity-50 font-semibold">
                {copyright}
            </p>
            <ul className="flex gap-2 tablet:gap-6">
                {Object.entries(socials).map(([key, value]) => (
                    <li key={key}>
                        <Link
                            href={value}
                            target="_blank"
                            className="inline-block relative z-1 p-2.5 link-actions after:absolute after:inset-0 after:rounded-full after:bg-neutrals-20 after:-z-1 after:opacity-10  hover:after:opacity-30 after:transition-all  after:duration-500"
                        >
                            <Sprite
                                name={`icon-${key}`}
                                className=" size-3 desktop:size-4 stroke-current fill-current "
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
