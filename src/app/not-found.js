"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Custom404 = () => {
    const router = useRouter();
    return (
        <div
            style={{ textAlign: "center", padding: "50px" }}
            className="min-h-[600px] flex flex-col justify-center items-center bg-zinc-100"
        >
            <h1 className="text-7xl text-theme3">404</h1>
            <p className="text-2xl text-black">Oops! Page not found.</p>
            <p className="text-lg text-zinc-400 mb-4">
                Click the button below to go back to the home page.
            </p>
            <button
                className="px-4 py-2 rounded bg-theme1 text-white text-lg font-bold"
                onClick={() => router.push("/")}
            >
                Back to home
            </button>
        </div>
    );
};

export default Custom404;
