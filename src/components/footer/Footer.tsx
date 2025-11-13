import { BottomPart } from "./BottomPart";
import { About } from "./About";
import { Menu } from "./Menu";
import { Feedback } from "./Feedback";

export const Footer = () => {
    return (
        <footer className="bg-dark-bg text-neutrals-20">
            <div className="wrapper">
                <div className="py-6 tablet:py-10 desktop:py-16 flex flex-col desktop:flex-row justify-between gap-10">
                    <About />
                    <div className="flex flex-col desktop:flex-row gap-[50px]">
                        <Menu />
                        <Feedback />
                    </div>
                </div>

                <div className="w-full h-0.5 bg-neutrals-0 opacity-10" />
                <BottomPart />
            </div>
        </footer>
    );
};
