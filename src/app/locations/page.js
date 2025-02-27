import { redirect } from "next/navigation";

const defaultSlug = "rushden";

export default function LocationsIndex() {

    redirect(`/locations/${defaultSlug}`);
}
