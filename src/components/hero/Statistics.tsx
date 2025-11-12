import { companyData } from "@/src/data/companyData";
import { siteData } from "@/src/data/data";
import { Sprite } from "../shared/Sprite";

const { statistics } = companyData;
const { statistics: siteDataStatistics } = siteData;

const statisticArray = Object.entries(siteDataStatistics);

export const Statistics = () => {
    return (
        <ul className="grid tablet:grid-cols-3 desktop:flex gap-3 tablet:gap-x-4 desktop:gap-8">
            {statisticArray.map(([key, value]) => (
                <li
                    key={value.title}
                    className="flex gap-2 tablet:gap-4 items-center"
                >
                    <div className="text-accent-blue bg-neutrals-0 rounded-full p-2.5">
                        <Sprite
                            name={`icon-${value.icon}`}
                            className="size-5 desktop:size-6 stroke-current fill-current"
                        />
                    </div>
                    <div className="text-small desktop:text-normal">
                        <p className="text-neutrals-80 text-nowrap">
                            {value.title}
                        </p>
                        <p className="text-neutrals-100 font-semibold text-nowrap">
                            {statistics[key]}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
};
