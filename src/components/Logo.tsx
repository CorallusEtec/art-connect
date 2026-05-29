import { ImgHTMLAttributes } from "react";

export type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {
    size?: | "32" | "48" | "52"
}

export function Logo({size = "32", ...props}: LogoProps) {

    return <img className={`invert aspect-video w-32 ${size}`} src="/assets/icons/artConnect-logo.svg" alt="Art Connect logo" {...props} />
}