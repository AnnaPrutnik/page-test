import { Decoration } from "./Decoration";
import { Button } from "../shared/Button";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

import { siteData } from "@/src/data/data";

const {
    buttonTitles: { leaveFeedback },
    testimonials: { title, description },
} = siteData;

export const Testimonials = () => {
    const coloredTitle = title.split(/(\*accent\*.*?\*\/accent\*)/g);

    return (
        <section className="bg-neutrals-10 relative text-neutrals-100 overflow-hidden">
            <div className="relative z-1">
                <Decoration />
                <div className="wrapper section desktop:pb-[42px] ">
                    <div className="flex flex-col desktop:flex-row gap-8">
                        <div className="desktop:w-[422px] shrink-0 grow-0">
                            <h3 className="text-heading4 tablet:text-heading3 desktop:text-heading2 font-extrabold font-lato mb-[22px]">
                                {coloredTitle.map(item => {
                                    const match = item.match(
                                        /\*accent\*(.*?)\*\/accent\*/
                                    );
                                    if (match) {
                                        return (
                                            <span
                                                className="text-accent-blue"
                                                key={item}
                                            >
                                                {match[1]}
                                            </span>
                                        );
                                    }

                                    return item;
                                })}
                            </h3>

                            <p className="mb-[42px] max-w-[600px]">
                                {description}
                            </p>
                            <Button
                                view="primary"
                                type="button"
                                className="rounded-md"
                            >
                                {leaveFeedback}
                            </Button>
                        </div>

                        <TestimonialsCarousel />
                    </div>
                </div>
            </div>
        </section>
    );
};
