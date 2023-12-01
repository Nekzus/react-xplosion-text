import React from "react";
interface XplosionProps {
    children: React.ReactNode;
    className?: string;
    colorClassName?: "blueColor" | "greenColor" | "pinkColor" | "orangeColor" | "darkColor" | "lightColor";
    style?: React.CSSProperties;
    textInput: string;
}
declare const Xplosion: React.FC<XplosionProps>;
export default Xplosion;
