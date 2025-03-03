(exports.id = 794),
    (exports.ids = [794]),
    (exports.modules = {
        7132: (e, s, l) => {
            Promise.resolve().then(l.bind(l, 4145)),
                Promise.resolve().then(l.bind(l, 6160));
        },
        8008: (e, s, l) => {
            Promise.resolve().then(l.t.bind(l, 2583, 23)),
                Promise.resolve().then(l.t.bind(l, 6840, 23)),
                Promise.resolve().then(l.t.bind(l, 8771, 23)),
                Promise.resolve().then(l.t.bind(l, 3225, 23)),
                Promise.resolve().then(l.t.bind(l, 9295, 23)),
                Promise.resolve().then(l.t.bind(l, 3982, 23));
        },
        4145: (e, s, l) => {
            "use strict";
            l.r(s), l.d(s, { default: () => x });
            var t = l(5344);
            l(3729);
            var n = l(783),
                r = l.n(n),
                i = l(1223),
                a = l.n(i);
            let c = (e) => {
                    let s = document.getElementById(e);
                    s && s.scrollIntoView({ behavior: "smooth" });
                },
                o = () => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                },
                d = [
                    [
                        "Rushden",
                        "Higham Ferrers",
                        "Irchester",
                        "Wellingborough",
                        "Sharnbrook",
                    ],
                    [
                        "Souldrop",
                        "Great Doddington",
                        "Little Irchester",
                        "Wilby",
                        "Earls Barton",
                    ],
                    [
                        "Wollaston",
                        "Bozeat",
                        "Grendon",
                        "Yardley Hastings",
                        "Wymington",
                    ],
                    ["Cogenhoe", "Billing", "Sywell", "Mears Ashby", "Ecton"],
                    [
                        "Northampton",
                        "Hardingstone",
                        "Weston Favell",
                        "Great Houghton",
                        "Little Houghton",
                    ],
                ];
            function x() {
                return (0, t.jsxs)("div", {
                    className: "bg-white",
                    children: [
                        (0, t.jsxs)("div", {
                            className:
                                "w-full px-8 xl:px-0 sm:flex items-center justify-center py-20 mx-auto max-w-6xl gap-x-8",
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "flex-1",
                                    children: [
                                        t.jsx("h2", {
                                            className:
                                                "text-4xl md:text-4xl mb-1 text-theme2 text-center sm:text-start tracking-tight",
                                            children: "We're happy to help!",
                                        }),
                                        (0, t.jsxs)("p", {
                                            className:
                                                "text-xl text-gray-400 text-center sm:text-start mt-4",
                                            children: [
                                                "If you're in the Wellingborough, Northamptonshire and surrounding area, we want to work with you!",
                                                " ",
                                                t.jsx("strong", {
                                                    className: "text-sky-600",
                                                    children: "Call us today!",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                t.jsx("div", {
                                    onClick: o,
                                    className:
                                        "w-80 pt-6 md:pt-0 mx-auto sm:mx-0",
                                    children: t.jsx("button", {
                                        className:
                                            "bg-theme3 w-full cursor-pointer text-lg font-bold rounded-lg shadow px-10 py-3",
                                        children: "Back to top",
                                    }),
                                }),
                            ],
                        }),
                        t.jsx("div", {
                            className: "bg-slate-900",
                            children: (0, t.jsxs)("div", {
                                className:
                                    "max-w-6xl mx-auto px-6 xl:px-0 py-10",
                                children: [
                                    (0, t.jsxs)("div", {
                                        className:
                                            "flex flex-col md:flex-row justify-between mb-10 gap-8 border-b border-white/10 pb-10",
                                        children: [
                                            t.jsx(a(), {
                                                alt: "MBCleans Logo",
                                                src: "/logo/mbcleans-logo-white.svg",
                                                className: "h-7",
                                                width: 140,
                                                height: 100,
                                            }),
                                            (0, t.jsxs)("nav", {
                                                className:
                                                    "hidden md:flex items-center flex-wrap gap-4 lg:gap-6 w-2/4 justify-center text-white",
                                                children: [
                                                    [
                                                        "home",
                                                        "plans",
                                                        "aboutUs",
                                                        "partners",
                                                        "contact",
                                                        "testimonials",
                                                    ].map((e) =>
                                                        t.jsx(
                                                            "button",
                                                            {
                                                                onClick: () =>
                                                                    c(e),
                                                                className:
                                                                    "hover:text-sky-500 transition-colors capitalize",
                                                                children: e
                                                                    .replace(
                                                                        /([A-Z])/g,
                                                                        " $1"
                                                                    )
                                                                    .trim(),
                                                            },
                                                            e
                                                        )
                                                    ),
                                                    t.jsx(r(), {
                                                        href: "/faq",
                                                        className:
                                                            "hover:text-sky-500 transition-colors",
                                                        children: "FAQ's",
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsxs)("div", {
                                                className:
                                                    "flex flex-row space-x-4 items-center justify-center lg:justify-end",
                                                children: [
                                                    t.jsx("a", {
                                                        href: "https://www.facebook.com/mbcleans",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: t.jsx(a(), {
                                                            src: "/icons/facebook.svg",
                                                            alt: "Facebook",
                                                            width: 26,
                                                            height: 26,
                                                        }),
                                                    }),
                                                    t.jsx("a", {
                                                        href: "https://www.instagram.com/mbcleans",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: t.jsx(a(), {
                                                            src: "/icons/instagram.svg",
                                                            alt: "Instagram",
                                                            width: 26,
                                                            height: 26,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, t.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            t.jsx("p", {
                                                className:
                                                    "text-lg w-full text-center text-white mb-6",
                                                children: "Areas We Serve:",
                                            }),
                                            t.jsx("div", {
                                                className: "mb-8 w-full",
                                                children: t.jsx("ul", {
                                                    className:
                                                        "flex flex-wrap gap-y-10 justify-center",
                                                    children: d.map((e, s) =>
                                                        t.jsx(
                                                            "ul",
                                                            {
                                                                className:
                                                                    "text-center w-full sm:w-1/3 lg:w-1/4 xl:w-1/5",
                                                                children: e.map(
                                                                    (e) =>
                                                                        t.jsx(
                                                                            "li",
                                                                            {
                                                                                children:
                                                                                    (0,
                                                                                    t.jsxs)(
                                                                                        r(),
                                                                                        {
                                                                                            href: `/locations/${e
                                                                                                .toLowerCase()
                                                                                                .replace(
                                                                                                    /\s+/g,
                                                                                                    "_"
                                                                                                )}`,
                                                                                            className:
                                                                                                "text-blue-400  hover:underline text-sm",
                                                                                            children:
                                                                                                [
                                                                                                    e,
                                                                                                    " Cleaning Services",
                                                                                                ],
                                                                                        }
                                                                                    ),
                                                                            },
                                                                            e
                                                                        )
                                                                ),
                                                            },
                                                            s
                                                        )
                                                    ),
                                                }),
                                            }),
                                        ],
                                    }),
                                    t.jsx("p", {
                                        className:
                                            "text-center text-sm mt-4 text-gray-400",
                                        children:
                                            "Copyright \xa9 2024 - 2025 MBCleans",
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            }
        },
        6160: (e, s, l) => {
            "use strict";
            l.r(s), l.d(s, { default: () => d });
            var t = l(5344),
                n = l(3729),
                r = l(783),
                i = l.n(r),
                a = l(1223),
                c = l.n(a),
                o = l(2254);
            function d() {
                let [e, s] = (0, n.useState)(!1),
                    [l, r] = (0, n.useState)(!1),
                    a = (0, o.useRouter)(),
                    d = () => {
                        s(!e);
                    },
                    h = (e) => {
                        let l = document.getElementById(e);
                        l && (l.scrollIntoView({ behavior: "smooth" }), s(!1));
                    };
                function m() {
                    return (0, t.jsxs)("nav", {
                        className:
                            "sm:flex text-center sm:text-start items-center font-semibold text-black leading-9 sm:leading-none text-xl sm:text-lg sm:text-md gap-x-4 xl:gap-x-6",
                        children: [
                            t.jsx(x, {
                                href: "/",
                                onClick: () => h("home"),
                                children: "Home",
                            }),
                            t.jsx(x, {
                                onClick: () => {
                                    g(), d();
                                },
                                children: t.jsx("p", {
                                    className: `flex justify-center ${
                                        l ? "text-theme3" : "text-black"
                                    }`,
                                    children: "Services",
                                }),
                            }),
                            t.jsx(x, {
                                href: "/",
                                onClick: () => h("partners"),
                                children: "Partners",
                            }),
                            t.jsx(x, {
                                onClick: () => a.push("/contact"),
                                children: "Contact",
                            }),
                            t.jsx(x, {
                                href: "/",
                                onClick: () => h("testimonials"),
                                children: "Testimonials",
                            }),
                            t.jsx(x, { href: "/faq", children: "FAQ's" }),
                        ],
                    });
                }
                function u() {
                    return (0, t.jsxs)("div", {
                        class: "border-gray-200 shadow-xl bg-gray-50  border-y max-w-5xl rounded-b-md px-4 py-5",
                        children: [
                            (0, t.jsxs)("div", {
                                class: "grid mx-auto text-gray-900 sm:grid-cols-2 md:px-6",
                                children: [
                                    (0, t.jsxs)("ul", {
                                        children: [
                                            t.jsx("li", {
                                                children: (0, t.jsxs)("a", {
                                                    href: "/services/home-cleaning",
                                                    class: "block p-3 rounded-lg hover:bg-gray-100",
                                                    children: [
                                                        t.jsx("div", {
                                                            class: "font-semibold",
                                                            children:
                                                                "Home Cleaning",
                                                        }),
                                                        t.jsx("span", {
                                                            class: "text-sm text-gray-500 ",
                                                            children:
                                                                "Bringing cleanliness and comfort to your doorstep",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            t.jsx("li", {
                                                children: (0, t.jsxs)("a", {
                                                    href: "/services/office-cleaning",
                                                    class: "block p-3 rounded-lg hover:bg-gray-100",
                                                    children: [
                                                        t.jsx("div", {
                                                            class: "font-semibold",
                                                            children:
                                                                "Office Cleaning",
                                                        }),
                                                        t.jsx("span", {
                                                            class: "text-sm text-gray-500 ",
                                                            children:
                                                                "Boosting productivity with spotless workspaces",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            t.jsx("li", {
                                                children: (0, t.jsxs)("a", {
                                                    href: "/services/warehouse-cleaning",
                                                    class: "block p-3 rounded-lg hover:bg-gray-100",
                                                    children: [
                                                        t.jsx("div", {
                                                            class: "font-semibold",
                                                            children:
                                                                "Warehouse Cleaning",
                                                        }),
                                                        t.jsx("span", {
                                                            class: "text-sm text-gray-500 ",
                                                            children:
                                                                "Optimizing warehouse hygiene for smooth operations",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, t.jsxs)("ul", {
                                        children: [
                                            t.jsx("li", {
                                                children: (0, t.jsxs)("a", {
                                                    href: "/services/school-cleaning",
                                                    class: "block p-3 rounded-lg hover:bg-gray-100 ",
                                                    children: [
                                                        t.jsx("div", {
                                                            class: "font-semibold",
                                                            children:
                                                                "School Cleaning",
                                                        }),
                                                        t.jsx("span", {
                                                            class: "text-sm text-gray-500 ",
                                                            children:
                                                                "Promoting a clean and safe learning environment",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            t.jsx("li", {
                                                children: (0, t.jsxs)("a", {
                                                    href: "/services/retail-cleaning",
                                                    class: "block p-3 rounded-lg hover:bg-gray-100 ",
                                                    children: [
                                                        t.jsx("div", {
                                                            class: "font-semibold",
                                                            children:
                                                                "Retail Cleaning",
                                                        }),
                                                        t.jsx("span", {
                                                            class: "text-sm text-gray-500 ",
                                                            children:
                                                                "Keeping stores sparkling for seamless shopping",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            t.jsx("li", {
                                                children: (0, t.jsxs)("a", {
                                                    href: "/services/medical-facility-cleaning",
                                                    class: "block p-3 rounded-lg hover:bg-gray-100 ",
                                                    children: [
                                                        t.jsx("div", {
                                                            class: "font-semibold",
                                                            children:
                                                                "Medical Facility Cleaning",
                                                        }),
                                                        t.jsx("span", {
                                                            class: "text-sm text-gray-500 ",
                                                            children:
                                                                "Ensuring pristine hygiene in healthcare settings",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            t.jsx("div", {
                                onClick: () => r(!1),
                                className:
                                    "flex justify-center px-5 pt-4 cursor-pointer ",
                                children: t.jsx("p", {
                                    className: "text-center text-theme2",
                                    children: "Close ✖",
                                }),
                            }),
                        ],
                    });
                }
                let g = () => {
                    r(!l);
                };
                function j() {
                    return t.jsx(i(), {
                        href: "/",
                        className: "flex my-auto h-[70px] cursor-pointer",
                        children: t.jsx(c(), {
                            alt: "MBCleans Logo",
                            src: "/logo/mbcleans-logo.svg",
                            className: "h-8 sm:h-9 my-auto",
                            width: 200,
                            height: 100,
                        }),
                    });
                }
                function f() {
                    return t.jsx("div", {
                        className: "flex",
                        children: t.jsx("div", {
                            className:
                                "flex-col justify-center my-auto w-full z-20",
                            children: (0, t.jsxs)("a", {
                                href: "tel:07710172363",
                                className:
                                    "flex gap-x-1 items-center text-end tracking-tight font-bold text-theme3 w-full h-full",
                                children: [
                                    (0, t.jsxs)("div", {
                                        children: [
                                            t.jsx("p", {
                                                className:
                                                    "text-[26px]  sm:text-3xl",
                                                children: "07710172363",
                                            }),
                                            t.jsx("p", {
                                                className:
                                                    "-mt-1.5 text-sm text-end text-black font-medium italic ",
                                                children:
                                                    "Open Hours: 24/7\xa0\xa0",
                                            }),
                                        ],
                                    }),
                                    t.jsx(c(), {
                                        src: "/icons/phone-circle-blue.svg",
                                        className: "h-10 sm:h-12 scale-x-[-1]",
                                        alt: "Contact Us Phone",
                                        width: 100,
                                        height: 100,
                                    }),
                                ],
                            }),
                        }),
                    });
                }
                return (0, t.jsxs)("div", {
                    className: "bg-white",
                    children: [
                        (0, t.jsxs)("div", {
                            className: "hidden lg:block ",
                            children: [
                                (0, t.jsxs)("div", {
                                    className:
                                        "max-w-6xl mx-auto px-4 flex justify-between items-center",
                                    children: [
                                        t.jsx(j, {}),
                                        t.jsx("div", {
                                            className: "hidden lg:block z-40",
                                            children: t.jsx(m, {}),
                                        }),
                                        t.jsx(f, {}),
                                    ],
                                }),
                                t.jsx("div", {
                                    className:
                                        "absolute z-40 bg-slate-50 left-1/2 -translate-x-1/2 rounded-b-md",
                                    children: l ? t.jsx(u, {}) : null,
                                }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: "hidden sm:block lg:hidden",
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "flex justify-between px-6",
                                    children: [t.jsx(j, {}), t.jsx(f, {})],
                                }),
                                t.jsx("div", {
                                    className:
                                        "flex justify-center bg-slate-50 py-4",
                                    children: t.jsx(m, {}),
                                }),
                                t.jsx("div", {
                                    className:
                                        "absolute z-40 bg-slate-50 left-1/2 w-2/3 -translate-x-1/2 rounded-b-md",
                                    children: l ? t.jsx(u, {}) : null,
                                }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: " sm:hidden",
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "flex justify-between px-2",
                                    children: [t.jsx(j, {}), t.jsx(f, {})],
                                }),
                                t.jsx("div", {
                                    className: `bg-slate-50 py-3 sm:hidden ${
                                        e ? "block" : "hidden"
                                    }`,
                                    children: t.jsx(m, {}),
                                }),
                                t.jsx("div", {
                                    onClick: d,
                                    className:
                                        "cursor-pointer flex justify-center bg-slate-900 py-2",
                                    children: t.jsx(function () {
                                        return t.jsx("div", {
                                            className: "sm:hidden",
                                            children: t.jsx("button", {
                                                className:
                                                    "text-lg text-white flex focus:outline-non",
                                                children: e
                                                    ? "Close Menu"
                                                    : "Open Menu",
                                            }),
                                        });
                                    }, {}),
                                }),
                                t.jsx("div", {
                                    className:
                                        "absolute z-10 bg-slate-50 left-1/2 w-full -translate-x-1/2 rounded-b-md",
                                    children: l ? t.jsx(u, {}) : null,
                                }),
                            ],
                        }),
                    ],
                });
            }
            function x({ children: e, onClick: s, href: l }) {
                return t.jsx("div", {
                    className: "cursor-pointer",
                    onClick: s,
                    children: l
                        ? t.jsx(i(), { href: l, children: e })
                        : t.jsx("span", { children: e }),
                });
            }
        },
        2904: (e, s, l) => {
            "use strict";
            l.r(s), l.d(s, { default: () => b, metadata: () => p });
            var t = l(5036),
                n = l(208),
                r = l.n(n),
                i = l(6843);
            let a = (0, i.createProxy)(
                    String.raw`C:\Users\hymus\VSCode Projects\mbcleans\components\layout\headerMenu.js`
                ),
                { __esModule: c, $$typeof: o } = a,
                d = a.default;
            function x() {
                return t.jsx("div", {
                    className: "w-full hidden md:block  bg-white",
                    children: t.jsx("div", {
                        className: "w-full lg:w-4/6 xl:w-3/5 max-w-4xl mx-auto",
                        children: t.jsx("div", {
                            className:
                                "bg-slate-900 h-[35px] text-sm rounded-b-md ",
                            children: (0, t.jsxs)("div", {
                                className:
                                    "flex items-center justify-center h-full text-sm text-white",
                                children: [
                                    t.jsx("b", { children: "Need a cleaner?" }),
                                    t.jsx("p", {
                                        className: "mx-1",
                                        children:
                                            "We pride ourselves on our competitive rates.",
                                    }),
                                    t.jsx("b", {
                                        children: t.jsx("u", {
                                            children: "Get in touch!",
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            }
            l(2);
            let h = (0, i.createProxy)(
                    String.raw`C:\Users\hymus\VSCode Projects\mbcleans\components\footerBar.js`
                ),
                { __esModule: m, $$typeof: u } = h,
                g = h.default;
            var j = l(342),
                f = l.n(j);
            l(5023);
            let p = {
                title: "MB Cleans | Professional Cleaning in Wellingborough & Northamptonshire",
                description:
                    "Expert commercial & domestic cleaning in Wellingborough & Northamptonshire with MB Cleans. Spotless results for home & business—contact us today!",
            };
            function b({ children: e }) {
                return (0, t.jsxs)("html", {
                    lang: "en",
                    children: [
                        (0, t.jsxs)(f(), {
                            children: [
                                t.jsx("title", { children: p.title }),
                                t.jsx("meta", {
                                    name: "description",
                                    content: p.description,
                                }),
                                t.jsx("link", {
                                    rel: "canonical",
                                    href: "https://www.mbcleans.co.uk/",
                                }),
                            ],
                        }),
                        (0, t.jsxs)("body", {
                            className: r().className,
                            children: [
                                t.jsx(x, {}),
                                t.jsx(d, {}),
                                e,
                                t.jsx(g, {}),
                            ],
                        }),
                    ],
                });
            }
        },
        5023: () => {},
    });
