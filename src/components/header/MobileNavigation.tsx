"use client";
import { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";
import { Button } from "../shared/Button";
import { Sprite } from "../shared/Sprite";
import { Menu } from "./Menu";
import { siteData } from "@/src/data/data";

const { ariaLabels } = siteData;

export const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenMenu = () => {
        setIsOpen(true);
    };

    const onCloseMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (!isOpen) return;

        const onClickLink = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a")) {
                onCloseMenu();
            }
        };

        document.addEventListener("click", onClickLink);
        return () => document.removeEventListener("click", onClickLink);
    }, [isOpen]);
    return (
        <div className="block  desktop:hidden">
            <Button
                view="secondary"
                aria-label={ariaLabels.burgerOpen}
                onClick={onOpenMenu}
            >
                <Sprite
                    name="icon-burger"
                    className="w-4 h-4 block fill-current"
                />
            </Button>
            <nav
                className={twMerge(
                    "fixed top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center bg-neutrals-0 transition-transform duration-500",
                    isOpen
                        ? "translate-x-0 scale-100"
                        : "translate-x-full scale-0"
                )}
            >
                <button
                    onClick={onCloseMenu}
                    aria-label={ariaLabels.burgerClose}
                    className="p-1 absolute top-4 right-4 active:text-primary"
                >
                    <Sprite
                        name="icon-close"
                        className="w-6 h-6 block fill-current"
                    />
                </button>
                <Menu />
            </nav>
        </div>
    );
};
