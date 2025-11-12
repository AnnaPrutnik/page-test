import { siteData } from "@/src/data/data";
import Link from "next/link";

const { breadcrumbs } = siteData;

export const Breadcrumbs = () => {
    return (
        <ul className="flex gap-1">
            {breadcrumbs.map((item, index) => (
                <li
                    key={item}
                    className='text-small tablet:text-normal not-last:after:content-["/"] not-last:text-neutrals-60 flex gap-1 last:text-neutrals-100'
                >
                    {index === breadcrumbs.length - 1 ? (
                        <p>{item}</p>
                    ) : (
                        <Link href={"#"}>{item}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
};
