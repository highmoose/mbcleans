import { NextResponse } from "next/server";
import { Resend } from "resend";
import { MBCleansSiteEmail } from "../../../../components/email/mbcleans-site-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        console.log(body);
        const {
            names,
            email,
            telephone,
            chooseService,
            typeOfClean,
            propertyType,
            roomsSelect,
            bathroomSelect,
            hallwaySelect,
            staircaseSelect,
            haveSupplies,
        } = body;
        const data = await resend.emails.send({
            from: "support@mbcleans.co.uk",
            to: ["admin@mbcleans.co.uk", "mb-cleans@outlook.com", email],
            subject: "MBCleans Request Confirmation",
            react: MBCleansSiteEmail({
                names: names,
                email: email,
                telephone: telephone,
                chooseService: chooseService,
                typeOfClean: typeOfClean,
                propertyType: propertyType,
                roomsSelect: roomsSelect,
                bathroomSelect: bathroomSelect,
                hallwaySelect: hallwaySelect,
                staircaseSelect: staircaseSelect,
                haveSupplies: haveSupplies,
            }),
        });
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
