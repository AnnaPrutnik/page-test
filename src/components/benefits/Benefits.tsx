import React from "react";

import { companyData } from "@/src/data/companyData";
import { siteData, availableBenefitsList } from "@/src/data/data";
import { Sprite } from "../shared/Sprite";

const { availableBenefits } = companyData;
const {
    benefits: { description, title },
} = siteData;

export const Benefits = () => {
    return (
        <section>
            <div className="wrapper section">
                <div className="mb-6">
                    <h3 className="subtitle mb-2">{title}</h3>
                    <p className="text-neutrals-80 data">{description}</p>
                </div>
                <ul className="flex gap-8 flex-wrap desktop:flex-nowrap">
                    {availableBenefits.map(item => {
                        const { icon, title } = availableBenefitsList[item];
                        const normalizedTitle = title.replace(/-/g, "\u2011");
                        return (
                            <li key={item} className="">
                                <div className="flex gap-3 items-center">
                                    <Sprite
                                        name={`icon-${icon}`}
                                        className="size-8 tablet:size-10 text-primary stroke-current fill-current shrink-0"
                                    />
                                    <h4 className="heading-5 tablet:text-heading4 font-lato font-semibold text-neutrals-100 hyphens-none">
                                        {normalizedTitle}
                                    </h4>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
