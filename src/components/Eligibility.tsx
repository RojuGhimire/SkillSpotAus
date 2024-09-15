import  { useState } from "react";

import { BiLoaderCircle } from "react-icons/bi"


export const Eligibility = () => {
    const [isLoading] = useState(false);

    return (
        <div className="w-full bg-primary">
            <button
                type="submit"
                className="font-bold text-white  py-2 rounded-full h-[60px] w-full sm:w-[500px] inline-flex mt-7   gap-1 animate-shimmer items-center justify-center  bg-[linear-gradient(110deg,#CB2026,45%,#f9f9f8,48%,#CB2026)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
            >
                {isLoading ? (
                    <BiLoaderCircle
                        className="animate-spin"
                        color="#ffffff"
                        size={25}
                    />
                ) : (
                    <div className="flex gap-2 items-center ">
                        <span>Free 60 second Skill Assessment</span>
                    </div>
                )}
            </button>
        </div>
    )
}
