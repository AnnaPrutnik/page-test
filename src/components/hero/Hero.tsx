import { Breadcrumbs } from "./Breadcrumbs";
import { companyData } from "@/src/data/companyData";
import Image from "next/image";
import { Contacts } from "./Contacts";

import { Statistics } from "./Statistics";
import { Decoration } from "./Decoration";

const { logo, name, total, phone, webSite } = companyData;

export const Hero = () => {
    return (
        <section className="bg-neutrals-10  overflow-hidden">
            <div className="relative z-1">
                <Decoration />
                <div className="wrapper flex flex-col gap-4 tablet:gap-8 desktop:gap-10 pt-6 tablet:pt-8 desktop:pt-10 pb-10 desktop:pb-[76px]">
                    <Breadcrumbs />
                    <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 desktop:gap-x-6">
                        <div className="row-span-1 tablet:row-span-2 desktop:row-span-3 desktop:p-[8.5px]">
                            <Image
                                src={logo}
                                alt={`Логотип ${name}`}
                                width={172}
                                height={172}
                                className="block w-[140px] tablet:w-40 desktop:w-[172px] h-auto aspect-square object-cover"
                            />
                        </div>

                        <div className="flex flex-col tablet:flex-row gap-3 items-start tablet:items-center">
                            <p className="text-heading3 tablet:text-heading2 text-neutrals-100 font-lato font-extrabold">
                                {name}
                            </p>
                            <div>
                                <div className="border border-primary px-3 py-1">
                                    <p className="text-primary text-small tablet:text-normal">
                                        {total}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 tablet:col-span-1">
                            <Contacts phone={phone} webSite={webSite} />
                        </div>
                        <div className="col-span-2 desktop:col-span-1 mt-3">
                            <Statistics />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
