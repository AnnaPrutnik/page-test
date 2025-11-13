import Image from "next/image";
import { Sprite } from "../shared/Sprite";
import { siteData } from "@/src/data/data";
import { TeammateType } from "@/src/data/companyData";
import { selectExperienceLabel } from "@/src/utils/selectExperienceLabel";

const {
    team: { experienceTitle },
} = siteData;
export const TeammateCard = ({
    avatar,
    experience,
    name,
    socials,
}: TeammateType) => {
    return (
        <li className="border border-neutrals-20 p-2 tablet:p-6 rounded-sm">
            <div className="mb-4">
                <Image
                    src={avatar}
                    alt={`фото ${name}`}
                    width={80}
                    height={80}
                    className="w-20 aspect-square object-cover rounded-full mx-auto mb-4"
                />
                <h4 className="text-normal desktop:text-large text-neutrals-100 font-semibold text-center mb-1">
                    {name}
                </h4>
                <p className="data text-neutrals-60 text-center">
                    {experienceTitle +
                        " " +
                        experience +
                        " " +
                        selectExperienceLabel(experience)}
                </p>
            </div>
            <ul className="flex gap-3 justify-center">
                {Object.entries(socials).map(([key, value]) => (
                    <li key={key} className="text-neutrals-8s0">
                        <Sprite
                            name={`icon-${key}`}
                            className="size-5 tablet:size-6 stroke-current"
                        />
                    </li>
                ))}
            </ul>
        </li>
    );
};
