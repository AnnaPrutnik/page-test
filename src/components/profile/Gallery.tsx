import { siteData } from "@/src/data/data";
import { GalleryItemType } from "@/src/data/companyData";
import Image from "next/image";

const {
    profile: { gallery },
} = siteData;

interface GalleryProps {
    imageList: GalleryItemType[];
}
export const Gallery = ({ imageList }: GalleryProps) => {
    return (
        <>
            <h3 className="visually-hidden">{gallery}</h3>
            <ul className="flex flex-col gap-2 tablet:items-center tablet:gap-3 desktop:items-start">
                {imageList.map(({ alt, href, top }, index) => (
                    <li key={index} className="max-w-[752px] ">
                        <Image
                            src={href}
                            alt={alt}
                            className="w-full h-auto aspect-[3.133] object-cover"
                            style={{
                                objectPosition: `0% ${top}%`,
                            }}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};
