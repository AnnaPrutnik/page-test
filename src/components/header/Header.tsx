import Image from "next/image";
import { siteData } from "@/src/data/data";
import { Navigation } from "./Navigation";
import { Actions } from "./Actions";

const {
    logo: { header },
} = siteData;

export const Header = () => {
    return (
        <header className="wrapper flex justify-between items-center py-3.5 bg-green">
            <div className="flex gap-12 items-center">
                <div>
                    <Image
                        src={header.src}
                        alt={header.alt}
                        width={160}
                        height={48}
                        className="w-[120px] h-auto tablet:w-40"
                    />
                </div>
                <Navigation />
            </div>
            <Actions />
        </header>
    );
};
