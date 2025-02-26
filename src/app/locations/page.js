import { notFound } from "next/navigation";

const locations = [
    "rushden",
    "higham_ferrers",
    "irchester",
    "wymington",
    "sharnbrook",
    "souldrop",
    "great_doddington",
    "little_irchester",
    "wilby",
    "earls_barton",
    "wollaston",
    "bozeat",
    "grendon",
    "yardley_hastings",
    "dentons",
    "cogenhoe",
    "billing",
    "sywell",
    "mears_ashby",
    "ecton",
    "northampton",
    "hardingstone",
    "weston_favell",
    "great_houghton",
    "little_houghton",
];

// ✅ Fix: Ensure All Locations Are Pre-Generated for Static Export
export async function generateStaticParams() {
    return locations.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
    if (!params || !params.slug) {
        return {
            title: "Default Title",
            description: "Default description",
        };
    }
    const locationName = params.slug
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return {
        title: `Professional Cleaning Services in ${locationName} | MB Cleans`,
        description: `Looking for expert cleaning services in ${locationName}? MB Cleans provides top-rated residential and commercial cleaning solutions. Get a free quote today!`,
    };
}

export default function LocationPage({ params }) {
    const locationName = params.slug
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-900">
                Professional Cleaning Services in {locationName}
            </h1>

            <p className="mt-4 text-lg text-gray-700">
                MB Cleans offers high-quality cleaning services in{" "}
                {locationName} and surrounding Northamptonshire areas. We
                specialize in carpet cleaning, office cleaning, and
                end-of-tenancy cleans.
            </p>

            <p className="mt-4 text-lg text-gray-700">
                Our experienced team is committed to providing top-tier cleaning
                solutions. Whether you need a one-time deep clean or regular
                maintenance, we’ve got you covered.
            </p>

            <nav className="text-sm text-gray-600 mt-6">
                <a href="/" className="hover:underline">
                    Home
                </a>{" "}
                &gt;
                <span className="text-gray-900">
                    {" "}
                    {locationName} Cleaning Services
                </span>
            </nav>
        </div>
    );
}
