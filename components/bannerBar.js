"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BannerBar() {
    const router = useRouter();
    return (
        <div className="w-full hidden md:block  bg-white">
            <div className="w-full lg:w-4/6 xl:w-3/5 max-w-4xl mx-auto">
                <div className="bg-slate-900 h-[35px] text-sm rounded-b-md ">
                    <div className="flex items-center justify-center h-full text-sm text-white">
                        <b>Need a cleaner?</b>
                        <p className="mx-1">
                            We pride ourselves on our competitive rates.
                        </p>
                        <b>
                            <button onClick={() => router.push("/contact")}>
                                Get in touch!
                            </button>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    );
}
