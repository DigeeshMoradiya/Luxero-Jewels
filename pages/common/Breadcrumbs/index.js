import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Breadcrumbs({ title, subTitle, center, subHeadingTitle, redirect, thirdredirect, thirdTitle, thirdHeadingTitle }) {
    const router = useRouter();

    const handleback = () => {
        router.push("/")
    }
    const handleSubback = () => {
        router.push(redirect)
    }
    const handleThirdback = () => {
        router.push(thirdredirect)
    }


    return (
        <div className={`px-1 flex gap-3 ${center ? "justify-center" : ""}`}>
            <p className="text-sm font-gtAmerica text-[#27272A] font-medium hover:text-[#71717A] cursor-pointer" onClick={handleback}>
                Home
            </p>
            <p className="text-sm font-gtAmerica text-[#27272A] font-medium">
                /
            </p>
            {subTitle &&
                <>
                    <p className="text-sm font-gtAmerica text-[#27272A] font-medium hover:text-[#71717A] cursor-pointer" onClick={handleSubback}>
                        {subHeadingTitle}
                    </p>
                    <p className="text-sm font-gtAmerica text-[#27272A] font-medium">
                        /
                    </p>
                </>}
            {thirdTitle &&
                <>
                    <p className="text-sm font-gtAmerica text-[#27272A] font-medium hover:text-[#71717A] cursor-pointer" onClick={handleThirdback}>
                        {thirdHeadingTitle}
                    </p>
                    <p className="text-sm font-gtAmerica text-[#27272A] font-medium">
                        /
                    </p>
                </>}
            <p className="text-sm font-gtAmerica text-[#71717A] font-normal">
                {title}
            </p>
        </div>
    );
}
