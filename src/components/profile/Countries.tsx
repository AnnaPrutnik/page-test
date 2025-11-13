"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Sprite } from "../shared/Sprite";
import { siteData, availableCountries } from "@/src/data/data";

const VISIBLE_ITEMS = 5;

const {
    profile: { services, allCountries },
} = siteData;

interface CountriesProps {
    countriesList: string[];
}

export const Countries = ({ countriesList }: CountriesProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const visibleCounties = countriesList.slice(0, VISIBLE_ITEMS);
    const hiddenCounties = countriesList.slice(VISIBLE_ITEMS);

    const onToggleShowMore = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <div>
            <h3 className="subtitle mb-6">{services}</h3>

            <ul className="mb-6">
                {visibleCounties.map(item => {
                    const { flag, title } = availableCountries[item];
                    return (
                        <li className="not-last:mb-3.5 flex gap-4" key={item}>
                            <Image
                                src={flag}
                                alt={`Флаг ${title}`}
                                width={43}
                                height={32}
                                className="w-[43px] aspect-[1.344] h-auto"
                            />
                            <p className="text-neutrals-100 data">{title}</p>
                        </li>
                    );
                })}
                <AnimatePresence initial={false}>
                    {isVisible &&
                        hiddenCounties.map((item, inx) => {
                            const { flag, title } = availableCountries[item];
                            return (
                                <motion.li
                                    className="not-last:mb-3.5 flex gap-4"
                                    key={item}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        transition: {
                                            duration: 0.2,
                                            delay: 0.1 * inx,
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            duration: 0.2,
                                            delay:
                                                0.1 *
                                                (hiddenCounties.length -
                                                    inx -
                                                    1),
                                        },
                                    }}
                                    layout
                                >
                                    <Image
                                        src={flag}
                                        alt={`Флаг ${title}`}
                                        width={43}
                                        height={32}
                                        className="w-[43px] aspect-[1.344] h-auto"
                                    />
                                    <p className="text-neutrals-100 data">
                                        {title}
                                    </p>
                                </motion.li>
                            );
                        })}
                </AnimatePresence>
            </ul>

            <div className="mb-6">
                <button
                    className="cursor-pointer flex gap-2 tablet:gap-4 text-primary hover:text-accent-blue active:text-accent-blue"
                    onClick={onToggleShowMore}
                >
                    {allCountries}
                    <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isVisible ? 180 : 0 }}
                        transition={{
                            duration: 0.3,
                            type: "tween",
                        }}
                    >
                        <Sprite
                            name="icon-arrow"
                            className="stroke-current size-5 desktop:size-6"
                        />
                    </motion.span>
                </button>
            </div>
        </div>
    );
};
