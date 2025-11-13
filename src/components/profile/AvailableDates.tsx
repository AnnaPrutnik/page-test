"use client";

import { siteData } from "@/src/data/data";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { Button } from "../shared/Button";
import { Sprite } from "../shared/Sprite";

import "react-day-picker/style.css";
import "./calendarStyle.css";

const {
    profile: { calendar },
    buttonTitles: { buyTicket },
} = siteData;

interface AvailableDatesProps {
    availableDates: Date[];
}

export const AvailableDates = ({ availableDates }: AvailableDatesProps) => {
    const defaultClassNames = getDefaultClassNames();

    return (
        <div className="max-w-[350px]">
            <h3 className="subtitle mb-6">{calendar}</h3>
            <div className="shadow-calendar py-6 pl-8 pr-6 border border-neutrals-20">
                <Button
                    view="secondary"
                    type="button"
                    className="w-full border border-secondary flex items-center gap-2.5 justify-center mb-[15px]"
                >
                    <Sprite name="icon-plus" className="size-4 fill-current" />
                    {buyTicket}
                </Button>
                <div className="text-neutrals-100 text-small desktop:text-normal">
                    <DayPicker
                        formatters={{
                            formatWeekdayName: weekday =>
                                weekday.toLocaleDateString("en-US", {
                                    weekday: "short",
                                }),
                        }}
                        mode="multiple"
                        selected={availableDates}
                        classNames={{
                            caption_label: `${defaultClassNames.caption_label} uppercase text-small desktop:text-normal`,
                            chevron: "size-5 stroke-[1px] fill-primary",
                            weekday:
                                "text-small py-2 font-normal text-neutrals-60",
                            day: `${defaultClassNames.day} font-medium`,
                            day_button: `${defaultClassNames.day_button} text-styles`,
                            outside: `${defaultClassNames.outside} text-neutrals-20`,
                            selected: `${defaultClassNames.selected} text-styles text-neutrals-0 relative after:absolute after:w-[32px] after:aspect-square after:bg-primary after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-1 after:rounded-full`,
                        }}
                        showOutsideDays
                    />
                </div>
            </div>
        </div>
    );
};
