import React from "react";

export default function HeaderBar() {
  return (
    <div className="w-full bg-white">
      <div className="bg-white px-6 xl:px-0 max-w-6xl mx-auto flex justify-between w-full text-black text-center">
        <div className=" flex">
          <div className="flex my-auto h-[70px]  ">
            <img
              alt="MBCleans Logo"
              src="/logo/mbcleans-logo.svg"
              className="h-9 my-auto"
            />
          </div>
        </div>
        <div className="">
          <div className="flex items-center h-[85px] justify-center">
            <div className="flex items-center font-semibold text-md gap-x-2 md:gap-x-6">
              <div>Home</div>
              <div>Plans</div>
              <div>About Us</div>
              <div>Partners</div>
              <div>Contact</div>
              <div>Testimonials</div>
            </div>
          </div>
        </div>
        <div className=" flex ">
          <div className=" gap-x-4 my-auto h-[70px] justify-end">
            <p className="text-4xl tracking-tight mt-2 font-bold text-theme3 ">
              0800 123 4567
            </p>
            <p className="-m-1.5 text-sm italic font-extralight ">
              Open Hours: Mon-Sat (9am-5pm)
            </p>
            {/* <div className="h-14 w-14 border-2 rounded-full">
              <img
                src="/icons/envelope.svg"
                alt="envelope"
                className=" w-6 flex m-auto h-full"
              />
            </div>
            <div className="h-14 w-14 border-2 rounded-full">
              <img
                src="/icons/phone.svg"
                alt="phone"
                className=" w-6 flex m-auto h-full"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
