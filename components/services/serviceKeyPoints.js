import React from "react";

export default function ServiceIntro({
  title,
  image1,
  alt1,
  keyTitle1,
  keyBody1,
  keyTitle2,
  keyBody2,
  keyTitle3,
  keyBody3,
  keyTitle4,
  keyBody4,
  keyTitle5,
  keyBody5,
  keyTitle6,
  keyBody6,
}) {
  return (
    <section class="bg-white ">
      <div>
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="grid gap-4 mt-8">
            <img class="w-full rounded-lg" src={image1} alt={alt1} />
          </div>
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-theme2 ">
              {title}
            </h2>
            <div className="py-2 border-b-[1px] border-slate-100">
              <p class="text-xl text-theme2 font-bold">{keyTitle1}</p>
              <p class="leading-5 text-base ">{keyBody1}</p>
            </div>
            <div className="py-2 border-b-[1px] border-slate-100">
              <p class="text-xl text-theme2 font-bold">{keyTitle2}</p>
              <p class="leading-5 text-base ">{keyBody2}</p>
            </div>
            <div className="py-2 border-b-[1px] border-slate-100">
              <p class="text-xl text-theme2 font-bold">{keyTitle3}</p>
              <p class="leading-5 text-base ">{keyBody3}</p>
            </div>
            <div className="py-2 border-b-[1px] border-slate-100">
              <p class="text-xl text-theme2 font-bold">{keyTitle4}</p>
              <p class="leading-5 text-base ">{keyBody4}</p>
            </div>
            <div className="py-2 border-b-[1px] border-slate-100">
              <p class="text-xl text-theme2 font-bold">{keyTitle5}</p>
              <p class="leading-5 text-base ">{keyBody5}</p>
            </div>
            <div className="py-2 border-b-[1px] border-slate-100">
              <p class="text-xl text-theme2 font-bold">{keyTitle6}</p>
              <p class="leading-5 text-base ">{keyBody6}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
