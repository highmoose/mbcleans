"use client";

import Image from "next/image";
import React from "react";
import { Shadows_Into_Light } from "next/font/google";
import { useRouter } from "next/navigation";

const shadows_Into_Light = Shadows_Into_Light({
    subsets: ["latin"],
    weight: "400",
});

export default function SpringCleanBlog() {
    const router = useRouter();
    return (
        <div className="w-full bg-zinc-50 pb-28">
            <div className="w-full max-w-5xl  mx-auto ">
                <p
                    className={`text-slate-900 text-2xl sm:text-4xl mb-2 text-center pt-16 mb-6 ${shadows_Into_Light.className}`}
                >
                    Blog Article
                </p>
                {/* Hero Section */}
                <div className="relative h-80 md:h-96 w-full mb-4 rounded-2xl">
                    <Image
                        src="/images/blog/spring-clean-article.png"
                        alt="Spring Cleaning Hero"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-b-lg rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white w-2/3">
                            Spring Cleaning Made Simple
                        </h1>
                        <p className="mt-2 text-lg md:text-xl text-white w-2/3">
                            Transform your home into a sanctuary
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 text-black bg-white shadow-2xl shadow-black/5 rounded-2xl px-8 md:px-16 lg:px-28 p-20">
                    <h1 className="text-3xl font-bold">
                        The Ultimate Spring Cleaning Guide: Refresh Your Home
                    </h1>
                    <p className="mt-4">
                        Spring cleaning is more than just tidying up—it&apos;s
                        an opportunity to create a healthier and more
                        comfortable living space. Over time, dust, allergens,
                        and bacteria accumulate, impacting indoor air quality
                        and overall well-being. A thorough deep clean can
                        rejuvenate your home, making it feel fresh and new.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Why Spring Cleaning is Essential
                    </h2>
                    <p className="mt-4">
                        The practice of spring cleaning is rooted in the desire
                        to start anew after the long, sometimes stagnant months
                        of winter. It goes beyond aesthetics and touches on the
                        core of what makes a home healthy and welcoming.
                        Removing built-up dust, allergens, and bacteria can
                        significantly improve indoor air quality, which is
                        especially important for those with respiratory issues
                        or allergies.
                    </p>
                    <p className="mt-4">
                        In addition to the physical benefits, a clean and
                        organized space also contributes to reduced stress and
                        enhanced mental clarity. A decluttered environment sets
                        the stage for improved productivity and relaxation.
                        Moreover, regular deep cleaning can help prevent the
                        buildup of pests, ensuring your home remains a safe and
                        pleasant haven for you and your family.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Essential Spring Cleaning Supplies
                    </h2>
                    <p className="mt-4">
                        Equipping yourself with the right supplies is crucial
                        for a successful spring cleaning session. Start with
                        quality microfibre cloths for effective dusting and an
                        all-purpose cleaner that can tackle various surfaces.
                        Natural cleaning agents like white vinegar and baking
                        soda offer an eco-friendly alternative to harsh
                        chemicals, while still delivering powerful results.
                    </p>
                    <p className="mt-4">
                        Additionally, ensure you have a reliable mop and bucket
                        for hard floors, a vacuum cleaner with multiple
                        attachments for different surfaces, and protective
                        rubber gloves to safeguard your hands. Stocking up on
                        plenty of bin bags is also essential for decluttering
                        and disposing of unwanted items efficiently.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Room-by-Room Spring Cleaning Guide
                    </h2>

                    {/* Kitchen Section */}
                    <section className="mt-6">
                        <h3 className="text-xl font-semibold">Kitchen</h3>
                        <p className="mt-4">
                            The kitchen is often considered the heart of the
                            home where meals are prepared and shared. Begin by
                            clearing out cupboards and organizing your pantry to
                            create a more streamlined space. Wipe down
                            countertops, appliances, and cabinets to remove
                            built-up grease and food residues.
                        </p>
                        <p className="mt-4">
                            Deep cleaning the fridge and freezer is
                            essential—not only does it extend their lifespan,
                            but it also ensures that your food is stored in a
                            hygienic environment. Don’t forget to scrub the
                            oven, stovetop, and even descale your kettle or
                            coffee machine to maintain peak performance.
                        </p>
                    </section>

                    <div className="w-full flex justify-center my-16">
                        <Image
                            src="/images/blog/spring-clean-article-2.png"
                            alt="Cleaning Supplies"
                            width={1000}
                            height={300}
                            className="rounded-lg shadow-2xl shadow-black/5"
                        />
                    </div>

                    {/* Living Room Section */}
                    <section className="mt-6">
                        <h3 className="text-xl font-semibold">Living Room</h3>
                        <p className="mt-4">
                            The living room is where you unwind and entertain
                            guests, making it a priority in your cleaning
                            routine. Dust and wipe all surfaces—including
                            shelves, tables, and skirting boards—to eliminate
                            allergens and improve the room&apos;s overall
                            ambiance. Regular vacuuming and steam cleaning of
                            carpets and upholstery can revive fabrics and lift
                            away hidden dirt.
                        </p>
                        <p className="mt-4">
                            Clean windows and window sills thoroughly to let in
                            more natural light, which can enhance the mood of
                            the entire space. A well-organized living room, free
                            of clutter like old magazines or unused décor, not
                            only looks inviting but also contributes to a sense
                            of calm and order.
                        </p>
                    </section>

                    {/* Bedrooms Section */}
                    <section className="mt-6">
                        <h3 className="text-xl font-semibold">Bedrooms</h3>
                        <p className="mt-4">
                            Bedrooms are personal retreats where a peaceful
                            environment is key. Start with washing all
                            bedding—including pillows, duvets, and sheets—to
                            remove allergens and ensure a fresh, restful sleep.
                            Flipping and vacuuming the mattress is another step
                            that can prolong its life and maintain hygiene.
                        </p>
                        <p className="mt-4">
                            Pay attention to dusting all furniture, light
                            fixtures, and even decorative items. Decluttering
                            wardrobes and donating unused clothing can transform
                            your bedroom into a serene space that promotes
                            relaxation and rejuvenation.
                        </p>
                    </section>

                    {/* Bathroom Section */}
                    <section className="mt-6">
                        <h3 className="text-xl font-semibold">Bathroom</h3>
                        <p className="mt-4">
                            Bathrooms demand a meticulous cleaning approach due
                            to the accumulation of germs and mineral deposits.
                            Start by scrubbing and disinfecting the toilet,
                            sink, and bath or shower area. Showerheads and taps
                            often require descaling to remove lime buildup,
                            which can impede water flow.
                        </p>
                        <p className="mt-4">
                            Washing or replacing shower curtains and organizing
                            toiletries by discarding expired products are
                            crucial steps for maintaining a sanitary and
                            organized space. Finally, mop and thoroughly
                            disinfect the floors to eliminate any lingering
                            bacteria or mold.
                        </p>
                    </section>

                    {/* Hallways & Entryway Section */}
                    <section className="mt-6">
                        <h3 className="text-xl font-semibold">
                            Hallways & Entryway
                        </h3>
                        <p className="mt-4">
                            As the first impression of your home, hallways and
                            entryways deserve special attention. Regularly
                            wiping down doors, handles, and light switches
                            removes everyday dirt and germs. Sweeping and
                            mopping floors in these transitional areas not only
                            enhances appearance but also sets a welcoming tone.
                        </p>
                        <p className="mt-4">
                            Decluttering items like shoes, coats, and other
                            accessories from the entry area can make a
                            significant difference, creating a more open and
                            inviting space right from the doorstep.
                        </p>
                    </section>

                    {/* Outdoor Areas Section */}
                    <section className="mt-6">
                        <h3 className="text-xl font-semibold">Outdoor Areas</h3>
                        <p className="mt-4">
                            Don’t neglect your outdoor spaces during your spring
                            cleaning efforts. Begin by sweeping patios and
                            pathways, and cleaning windows and doors to remove
                            grime and dust. Revitalizing outdoor furniture can
                            transform your garden or patio into an extension of
                            your living space.
                        </p>
                        <p className="mt-4">
                            Additionally, clearing out the shed or garage and
                            checking the gutters for blockages will help prevent
                            water damage and ensure that your home’s exterior
                            remains as pristine as the interior.
                        </p>
                    </section>

                    <h2 className="text-2xl font-semibold mt-12">
                        Decluttering Tips for a Fresh Start
                    </h2>
                    <p className="mt-4">
                        Decluttering is a fundamental part of spring cleaning
                        that can dramatically improve the overall organization
                        and flow of your home. Over time, everyday living leads
                        to the accumulation of items that no longer serve a
                        purpose, contributing to visual and physical clutter.
                    </p>
                    <p className="mt-4">
                        Consider adopting the <strong>12-Month Rule</strong>—if
                        you haven’t used an item in the past year, it might be
                        time to donate or recycle it. Approach each room
                        individually, allowing you to focus on one space at a
                        time and avoid feeling overwhelmed. Investing in
                        practical storage solutions such as baskets, shelving,
                        and organizers will help maintain order and keep your
                        home clutter-free.
                    </p>

                    <div className="text-center mt-10">
                        <h2 className="text-2xl font-semibold">
                            Need Help with Your Spring Cleaning?
                        </h2>
                        <p className="mt-4">
                            At MB Cleans, we provide expert domestic cleaning
                            services across Wellingborough and Northamptonshire,
                            ensuring your home is left spotless and refreshed.
                            Our experienced team offers both one-off deep cleans
                            and regular maintenance, so you can enjoy a pristine
                            environment without lifting a finger.
                        </p>
                        <div className=" mt-10">
                            <p className="mt-4 font-bold text-2xl">
                                Book your spring clean today!{" "}
                            </p>
                            <span
                                onClick={() => router.push("/contact")}
                                className="text-theme3 hover:text-theme1 text-2xl font-bold cursor-pointer"
                            >
                                <span className="underline"> Contact us</span>{" "}
                                for a free quote.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
