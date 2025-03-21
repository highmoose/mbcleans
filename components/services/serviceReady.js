import React from "react";

export default function ServiceReady({ body1, body2, question, button }) {
    return (
        <div className="flex justify-between bg-slate-50">
            <div className="text-theme2 font-bold text-2xl max-w-6xl rounded-md mx-auto px-6 lg:px-10 py-16 ">
                <p className="px-8 mb-4 leading-7 font-thin text-center max-w-3xl mx-auto">
                    {body1}
                </p>

                <div className="">
                    <p className="px-10 mb-6 text-4xl tracking-tight font-bold text-center mx-auto">
                        {question}
                    </p>
                    <div className="flex justify-center mb-6">
                        <button className="mx-auto sm:mx-0">
                            <a className="bg-theme1 text-white cursor-pointer justify-center text-xl text-center rounded-lg shadow px-10 py-3 flex items-center">
                                {button}
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
