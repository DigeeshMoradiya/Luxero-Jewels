import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Breadcrumbs({ title, subTitle, subHeadingTitle, redirect }) {
    const router = useRouter();

    const handleback = () => {
        router.push("/")
    }
    const handleSubback = () => {
        router.push(redirect)
    }

    return (
        <div className="px-1 flex gap-3">
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
            <p className="text-sm font-gtAmerica text-[#71717A] font-normal">
                {title}
            </p>
        </div>
    );
}
