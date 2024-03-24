import React from "react";

export default function PartnersBar2() {
  return (
    <div id="partners" className="w-full">
      <div>
        <meta charset="utf-8" />
      </div>

      <div class="relative font-inter antialiased">
        <div class="relative max-h-[280px] flex flex-col justify-center bg-slate-900 overflow-hidden">
          <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <p className="text-center text-white text-xl mb-12">
              We work with amazing people, here are some you may already know...
            </p>
            <div class="text-center">
              <div
                x-data="{}"
                x-init="$nextTick(() => {
                            let ul = $refs.logos;
                            ul.insertAdjacentHTML('afterend', ul.outerHTML);
                            ul.nextSibling.setAttribute('aria-hidden', 'true');
                        })"
                class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
              >
                <ul
                  x-ref="logos"
                  class="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                >
                  <li>
                    <img
                      className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/insituform-white.png"
                      alt="Facebook"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[40px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/coley-white.png"
                      alt="Disney"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/isefire-white.png"
                      alt="Airbnb"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/greencold-white.png"
                      alt="Apple"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[40px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/whitebox-white.png"
                      alt="Spark"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[60px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/beacon-white.png"
                      alt="Samsung"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[25px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/highamvets-white.png"
                      alt="Quora"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[60px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/ukbrandsales-white.png"
                      alt="Sass"
                    />
                  </li>
                </ul>
                <ul
                  x-ref="logos"
                  class="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                >
                  <li>
                    <img
                      className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/insituform-white.png"
                      alt="Facebook"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[40px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/coley-white.png"
                      alt="Disney"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/isefire-white.png"
                      alt="Airbnb"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/greencold-white.png"
                      alt="Apple"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[40px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/whitebox-white.png"
                      alt="Spark"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[60px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/beacon-white.png"
                      alt="Samsung"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[25px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/highamvets-white.png"
                      alt="Quora"
                    />
                  </li>
                  <li>
                    <img
                      className="max-h-[60px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                      src="/images/partners/ukbrandsales-white.png"
                      alt="Sass"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
