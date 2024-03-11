import { NextResponse } from "next/server";
import { Resend } from "resend";
import { MBCleansSiteEmail } from "../../../../components/email/mbcleans-site-email";
import { formData } from "../../../../components/estimateBar";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "website@mbcleans.co.uk",
      to: ["admin@mbcleans.co.uk"],
      subject: "Test Email",
      react: MBCleansSiteEmail({ formData }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
