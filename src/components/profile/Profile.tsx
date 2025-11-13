import { siteData } from "@/src/data/data";
import { companyData } from "@/src/data/companyData";

import { Divider } from "../shared/Divider";
import { Description } from "./Description";
import { SocialItems } from "./SocialItems";
import { Gallery } from "./Gallery";
import { Countries } from "./Countries";
import { AvailableDates } from "./AvailableDates";

const { description, socials, gallery, countries, availableDates } =
    companyData;
const {
    profile: { title },
} = siteData;

export const Profile = () => {
    return (
        <section>
            <h2 className="visually-hidden">{title}</h2>
            <div className="wrapper section grid desktop:grid-cols-[1fr_350px] desktop:gap-x-16 gap-y-4">
                <div>
                    <div className="mb-6">
                        <Description text={description} />
                    </div>
                    <div className="mb-6 tablet:mb-8 desktop:mb-10">
                        <SocialItems socialList={socials} />
                    </div>
                    <div>
                        <Gallery imageList={gallery} />
                    </div>
                </div>
                <div className="tablet:grid tablet:grid-cols-2 tablet:gap-6 desktop:block">
                    <div className="mb-4 tablet:mb-8 desktop:mb-16 ">
                        <Countries countriesList={countries} />
                        <Divider />
                    </div>
                    <div>
                        <AvailableDates availableDates={availableDates} />
                    </div>
                </div>
            </div>
        </section>
    );
};
