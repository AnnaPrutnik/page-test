import Link from "next/link";

import { FeedbackForm } from "./FeedbackForm";
import { siteData } from "@/src/data/data";
import { Sprite } from "../shared/Sprite";

const {
    footer: {
        feedback: { title, text, phone, email },
    },
} = siteData;

export const Feedback = () => {
    return (
        <div className="max-w-[364px]">
            <p className="footer-subtitle">{title}</p>
            <p className="data mb-[30px]">{text}</p>
            <FeedbackForm />
            <ul className="flex flex-col gap-2.5">
                <li>
                    <Link
                        href={`tel:${phone}`}
                        className=" text-neutrals-40 link-actions data flex gap-3"
                    >
                        <Sprite
                            name="icon-phone"
                            className="size-5 desktop:size-6 text-accent-blue fill-current"
                        />
                        {phone}
                    </Link>
                </li>
                <li>
                    <Link
                        href={`mailto:${email}`}
                        className="text-neutrals-40 link-actions data flex gap-3"
                    >
                        <Sprite
                            name="icon-email"
                            className="size-5 desktop:size-6 text-accent-blue  fill-current"
                        />

                        {email}
                    </Link>
                </li>
            </ul>
        </div>
    );
};
