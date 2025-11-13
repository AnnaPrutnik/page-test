"use client";
import { useState, useRef, useEffect } from "react";
import debounce from "debounce";
import { motion } from "motion/react";
import { companyData } from "@/src/data/companyData";

import { TestimonialCard } from "./TestimonialCard";

const { testimonials } = companyData;

export const TestimonialsCarousel = () => {
    const listRef = useRef<HTMLUListElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [offset, setOffset] = useState(0);
    const [totalSlides, setTotalSlides] = useState(1);

    useEffect(() => {
        const updateContainerWidth = () => {
            if (listRef.current && wrapperRef.current) {
                const result =
                    listRef.current.scrollWidth /
                    wrapperRef.current.offsetWidth;
                const totalSlides = Math.ceil(result);

                const gap = Math.ceil(
                    listRef.current.scrollWidth / totalSlides
                );

                setOffset(gap);

                setTotalSlides(totalSlides);
            }
        };
        updateContainerWidth();
        const debouncedUpdateContainerWidth = debounce(
            updateContainerWidth,
            300
        );
        window.addEventListener("resize", debouncedUpdateContainerWidth);
        return () => {
            window.removeEventListener("resize", debouncedUpdateContainerWidth);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listRef.current]);

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className=" grow overflow-hidden">
            <div className="relative" ref={wrapperRef}>
                <motion.ul
                    ref={listRef}
                    className="flex gap-8"
                    animate={{
                        x: `-${currentSlide * offset}px`,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                    }}
                >
                    {testimonials.map(item => (
                        <li key={item.date + item.name} className="w-[352px]">
                            <TestimonialCard {...item} />
                        </li>
                    ))}
                </motion.ul>
            </div>
            {totalSlides > 0 && (
                <div className="flex justify-center mt-6 gap-2 tablet:gap-3">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            aria-label={`Перейти до ${index + 1} слайдуЇ`}
                            onClick={() => handleDotClick(index)}
                            className={`h-3 w-3 rounded-full transition-colors cursor-pointer ${
                                index === currentSlide
                                    ? "bg-primary"
                                    : "bg-neutrals-20 hover:bg-neutrals-80 active:bg-neutrals-80"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
