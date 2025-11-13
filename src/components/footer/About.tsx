import Image from "next/image";
import { siteData } from "@/src/data/data";

const {
    footer: { logo, text },
} = siteData;

export const About = () => {
    return (
        <div>
            <Image src={logo} alt="Лого" className="mb-[39px]" />
            <p className="data">{text}</p>
        </div>
    );
};
