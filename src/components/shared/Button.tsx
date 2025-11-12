import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    view: "primary" | "secondary";
    className?: string;
}

export const Button = ({
    view,
    className = "",
    children,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    return (
        <button
            className={twMerge(
                "text-btn-small tablet:text-btn-normal px-2 py-2 tablet:px-6 tablet:py-3 cursor-pointer transition-colors duration-500",
                view === "primary"
                    ? "bg-primary text-neutrals-0 hover:bg-accent-blue active:bg-accent-blue "
                    : "bg-transparent text-primary hover:text-accent-blue active:text-accent-blue",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
