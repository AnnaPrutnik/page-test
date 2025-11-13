import { siteData } from "@/src/data/data";
import { companyData } from "@/src/data/companyData";
import Image from "next/image";
import { selectExperienceLabel } from "@/src/utils/selectExperienceLabel";
import Link from "next/link";
import { Sprite } from "../shared/Sprite";

const {
    team: { title, allTeam, experienceTitle },
} = siteData;

const { team } = companyData;

export const Team = () => {
    return (
        <section>
            <div className="wrapper section">
                <div className="flex justify-between items-center mb-[11px]">
                    <h3 className="subtitle">{title}</h3>
                    <button className="text-primary cursor-pointer data font-semibold">
                        {allTeam} ({team.length})
                    </button>
                </div>
                <ul className="grid grid-cols-[repeat(auto-fill,130px)] tablet:grid-cols-[repeat(auto-fill,minmax(225px,226px))] gap-x-3 grid-rows-1 auto-rows-[0] overflow-hidden gap-y-0 justify-between">
                    {team.map(
                        ({ avatar, experience, name, socials }, index) => (
                            <li
                                key={index}
                                className="border border-neutrals-20 p-2 tablet:p-6 rounded-sm"
                            >
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
                                    {Object.entries(socials).map(
                                        ([key, value]) => (
                                            <li
                                                key={key}
                                                className="text-neutrals-8s0"
                                            >
                                                <Sprite
                                                    name={`icon-${key}`}
                                                    className="size-5 tablet:size-6 stroke-current"
                                                />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};
