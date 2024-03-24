import React from "react";

export default function ServiceIntro({
  title,
  body1,
  body2,
  body3,
  body4,
  image1,
  image2,
  alt1,
  alt2,
}) {
  return (
    <section class="bg-white dark:bg-slate-900 h-[200px">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p class="mb-4 text-base">{body1}</p>
          <p class="mb-4 text-base">{body2}</p>
          <p class="mb-4 text-base">{body3}</p>
          <p class="mb-4 text-base">{body4}</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src={image1} alt={alt1} />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src={image2}
            alt={alt2}
          />
        </div>
      </div>
    </section>
  );
}
