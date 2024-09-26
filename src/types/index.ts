import { NAVLINKS } from "@/constants";

export type Linknames = (typeof NAVLINKS)[number]["name"];

export type ActiveLinkContextType = {
    activeLink: string;
    setActiveLink: React.Dispatch<React.SetStateAction<Linknames>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};


export interface ViewportContextType {
    width: number;
}
