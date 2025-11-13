import { siteData } from "@/src/data/data";
const {
    profile: { description },
} = siteData;

interface DescriptionProps {
    text: string;
}
export const Description = ({ text }: DescriptionProps) => {
    return (
        <>
            <h3 className="subtitle mb-3">{description}</h3>
            <p className="data">{text}</p>
        </>
    );
};
