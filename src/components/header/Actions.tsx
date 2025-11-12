import { Button } from "../shared/Button";
import { Sprite } from "../shared/Sprite";

import { MobileNavigation } from "./MobileNavigation";
import { siteData } from "@/src/data/data";

const { buttonTitles, ariaLabels } = siteData;

export const Actions = () => {
    return (
        <div className="flex gap-4">
            <Button
                view="secondary"
                type="button"
                aria-label={ariaLabels.create}
            >
                <Sprite
                    name="icon-create"
                    className="w-4 h-4 block tablet:hidden fill-current"
                />
                <span className="hidden tablet:inline">
                    {buttonTitles.create}
                </span>
            </Button>
            <Button
                view="primary"
                type="button"
                aria-label={ariaLabels.login}
                className="flex "
            >
                <Sprite
                    name="icon-login"
                    className="w-4 h-4 block tablet:hidden fill-current"
                />
                <span className="hidden tablet:inline">
                    {buttonTitles.login}
                </span>
            </Button>
            <MobileNavigation />
        </div>
    );
};
