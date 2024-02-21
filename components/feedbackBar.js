import React from "react";

export default function FeedbackBar() {
  return (
    <div class="min-w-screen flex items-center justify-center w-full">
      <div class="w-full bg-white py-40 text-gray-800">
        <div class="w-full max-w-6xl mx-auto">
          <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-6xl md:text-7xl font-bold mb-5 text-[#004976] ">
              What people are saying.
            </h1>
            <h3 class="text-xl mb-5 font-light">
              Here are some of the many happy customers!
            </h3>
            <div class="text-center mb-10">
              <span class="inline-block w-60 h-1 rounded-full bg-[#68CDE8]"></span>
            </div>
          </div>
          <div className="w-full gap-x-20 flex text-zinc-5">
            <div className="w-1/3 ">
              <p className="text-2xl  font-bold italic mb-6 tracking-tight">
                &lsquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.&lsquo;
              </p>
              <div class="w-full flex mb-4 items-center">
                <div class="overflow-hidden rounded-full w-16 h-16 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=3" alt="" />
                </div>
                <div class="flex-grow pl-6">
                  <p class="font-bold text-lg uppercase text-gray900">
                    Tommie Ewart.
                  </p>
                  <p class="-mt-1 font-bold text-md uppercase text-gray-400">
                    Director
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <p className="text-2xl font-bold italic mb-6 tracking-tight">
                &lsquo;Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.&lsquo;
              </p>
              <div class="w-full flex mb-4 items-center">
                <div class="overflow-hidden rounded-full w-16 h-16 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=10" alt="" />
                </div>
                <div class="flex-grow pl-6">
                  <p class="font-bold text-lg uppercase text-gray900">
                    Jessica W.
                  </p>
                  <p class="-mt-1 font-bold text-md uppercase text-gray-400">
                    Director
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="w-1/3 ">
              <p className="text-2xl font-bold italic mb-6 tracking-tight">
                &lsquo;At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum.&lsquo;
              </p>
              <div class="w-full flex mb-4 items-center">
                <div class="overflow-hidden rounded-full w-16 h-16 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=5" alt="" />
                </div>
                <div class="flex-grow pl-6">
                  <p class="font-bold text-lg uppercase text-gray900">
                    Lillie West.
                  </p>
                  <p class="-mt-1 font-bold text-md uppercase text-gray-400">
                    Director
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          {/* <div class="-mx-3 md:flex items-start">
            <div class="px-3 md:w-1/3">
              <div class="w-full mx-auto rounded-lg bg-white shadow-sm hover:shadow-xl  border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-4 items-center">
                  <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-lg uppercase text-gray-600">
                      Kenzie Edgar.
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-base font-bold leading-normal">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt ratione dolor exercitationem minima quas itaque
                    saepe quasi architecto vel! Accusantium, vero sint
                    recusandae cum tempora nemo commodi soluta deleniti.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div class="w-full mx-auto rounded-lg bg-white shadow-sm hover:shadow-xl border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-4 items-center">
                  <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-lg uppercase text-gray-600">
                      Stevie Tifft.
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-base font-bold  leading-normal">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                    Dolore quod necessitatibus, labore sapiente, est,
                    dignissimos ullam error ipsam sint quam tempora vel.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-3 md:w-1/3">
              <div class="w-full mx-auto rounded-lg bg-white shadow-sm hover:shadow-xl border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-4 items-center">
                  <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=3" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-lg uppercase text-gray-600">
                      Tommie Ewart.
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-base font-bold  leading-normal">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vitae, obcaecati ullam excepturi dicta error deleniti sequi.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div class="w-full mx-auto rounded-lg bg-white shadow-sm hover:shadow-xl border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-4 items-center">
                  <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-lg uppercase text-gray-600">
                      Charlie Howse.
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-base font-bold  leading-normal">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto inventore voluptatum nostrum atque, corrupti,
                    vitae esse id accusamus dignissimos neque reprehenderit
                    natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-3 md:w-1/3">
              <div class="w-full mx-auto rounded-lg bg-white shadow-sm hover:shadow-xl border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-4 items-center">
                  <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=5" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-lg uppercase text-gray-600">
                      Nevada Herbertson.
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-base font-bold  leading-normal">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                    ipsum, laboriosam nostrum facere exercitationem pariatur
                    deserunt tempora molestiae assumenda nesciunt alias eius?
                    Illo, autem!
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div class="w-full mx-auto rounded-lg bg-white shadow-sm hover:shadow-xl border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-4 items-center">
                  <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-lg uppercase text-gray-600">
                      Kris Stanton.
                    </h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-base font-bold  leading-normal">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem iusto, explicabo, cupiditate quas totam!
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
