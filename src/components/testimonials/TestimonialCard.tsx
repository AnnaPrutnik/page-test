import Image from "next/image";
import { Sprite } from "../shared/Sprite";

import { TestimonialType } from "@/src/data/companyData";
export const TestimonialCard = ({
    avatar,
    date,
    name,
    rate,
    route,
    text,
}: TestimonialType) => {
    return (
        <div className="testimonial-shadow bg-neutrals-0 rounded-[10px] p-5 pt-[30px] min-w-[250px] tablet:min-w-[353px] flex flex-col justify-between h-full">
            <div>
                <div className="flex gap-[22px] mb-[22px]">
                    <div>
                        <Image
                            src={avatar}
                            alt={`Фото ${name}`}
                            className="rounded-full size-[72px] object-cover"
                            width={72}
                            height={72}
                        />
                    </div>
                    <div className="font-roboto">
                        <h3 className=" font-semibold text-testimonial-name-small desktop:text-testimonial-name-large mb-2">
                            {name}
                        </h3>
                        <p className="testimonial-text text-primary font-medium mb-2">
                            {route}
                        </p>
                        <p className="testimonial-text text-neutrals-60">
                            {date}
                        </p>
                    </div>
                </div>
                <p className="data mb-2 tablet:mb-[42px]">{text}</p>
            </div>

            <ul className="flex gap-[3px]">
                {Array.from({ length: 5 }, (_, i) => i + 1).map(el => (
                    <li
                        key={el}
                        style={{
                            color:
                                rate >= el
                                    ? "var(--color-primary)"
                                    : "var(--color-neutrals-0)",
                        }}
                    >
                        <Sprite
                            name="icon-star"
                            className="size-4 stroke-primary fill-current"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
