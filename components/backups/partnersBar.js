import React from "react";

export default function PartnersBar() {
  return (
    <div className="w-full bg-white  flex items-center">
      <div className="max-w-6xl my-6 w-full mx-auto flex gap-x-14 px-6 items-center">
        <div className="w-1/5 text-theme2 leading-5">
          {" "}
          We work with amazing people, here are some you may already know...
        </div>
        <div className="w-full">
          <div className="flex justify-between my-16">
            <div className="max-w-[200px] w-1/5 flex justify-center ">
              <img
                alt="Insituform Logo"
                src="/images/partners/insituform.svg"
                className="h-12 my-auto "
              />
            </div>
            <div className="max-w-[200px] w-1/5 flex justify-center">
              <img
                alt="Coley Logo"
                src="/images/partners/coley.svg"
                className="h-12 my-auto "
              />
            </div>
            <div className="max-w-[200px] w-1/5 flex justify-center">
              <img
                alt="IdeFire Logo"
                src="/images/partners/isefire.svg"
                className="h-12 my-auto "
              />
            </div>
            <div className="max-w-[200px] w-1/5 flex justify-center">
              <img
                alt="Greencold Logo"
                src="/images/partners/greencold.svg"
                className="h-12 my-auto "
              />
            </div>
          </div>
          <div className="flex justify-between my-16">
            <div className="max-w-[200px] w-1/5 flex justify-center ">
              <img
                alt="Whitebox Logo"
                src="/images/partners/whitebox.svg"
                className="h-12 my-auto "
              />
            </div>
            <div className="max-w-[200px] w-1/5 flex justify-center">
              <img
                alt="Beacon Logo"
                src="/images/partners/beacon.svg"
                className="h-12 my-auto "
              />
            </div>
            <div className="max-w-[200px] w-1/5 flex justify-center">
              <img
                alt="Higham Vets Logo"
                src="/images/partners/higham-vets.svg"
                className="h-12 my-auto "
              />
            </div>
            <div className="max-w-[200px] w-1/5 flex justify-center">
              <img
                alt="UK Brand Sales Logo"
                src="/images/partners/ukbrandsales.svg"
                className="h-12 my-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
