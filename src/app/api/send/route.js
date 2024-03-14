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
      chooseService,
      typeOfClean,
      propertyType,
      companyName,
      roomsSelect,
      hallwaySelect,
      staircaseSelect,
      haveSupplies,
    } = body;
    const data = await resend.emails.send({
      from: "support@mbcleans.co.uk",
      to: ["admin@mbcleans.co.uk", email],
      subject: "Stage 2 Test",
      react: MBCleansSiteEmail({
        names: names,
        email: email,
        chooseService: chooseService,
        typeOfClean: typeOfClean,
        propertyType: propertyType,
        companyName: companyName,
        roomsSelect: roomsSelect,
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
