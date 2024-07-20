import { NextResponse, NextRequest } from "next/server";
import { transport } from "@/lib/email";

export async function POST(request) {
    const username = process.env.PUBLIC_EMAIL_USERNAME;
    const password = process.env.PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.PUBLIC_PERSONAL_EMAIL;

    try {
        const formData = await request.json();
        const { email, subject, message } = formData;
        // console.log(formData);
        const mailOptions = {
            from: email,
            to: username,
            subject: subject,
            html: `
                <div>
                    <h1>${subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>${message}</p>
                </div>
            `,
        };

        if (email) {
            mailOptions.replyTo = email;
        }

        const mail = await transport.sendMail(mailOptions);
        return NextResponse.json({ message: "Success: email was sent" });
    } catch (error) {
        console.log(`Error sending email: ${error}`);
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
    }
}
