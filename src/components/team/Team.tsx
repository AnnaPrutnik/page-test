import { siteData } from "@/src/data/data";
import { companyData } from "@/src/data/companyData";
import { TeammateCard } from "./TeammateCard";
import { Divider } from "../shared/Divider";

const {
    team: { title, allTeam },
} = siteData;

const { team } = companyData;

export const Team = () => {
    return (
        <section>
            <div className="wrapper">
                <div className="section">
                    <div className="flex justify-between items-center mb-[11px]">
                        <h3 className="subtitle">{title}</h3>
                        <button className="text-primary cursor-pointer data font-semibold">
                            {allTeam} ({team.length})
                        </button>
                    </div>
                    <ul className="grid grid-cols-[repeat(auto-fill,130px)] tablet:grid-cols-[repeat(auto-fill,minmax(225px,226px))] gap-x-3 grid-rows-1 auto-rows-[0] overflow-hidden gap-y-0 justify-between">
                        {team.map((item, index) => (
                            <TeammateCard key={index} {...item} />
                        ))}
                    </ul>
                </div>

                <Divider />
            </div>
        </section>
    );
};
