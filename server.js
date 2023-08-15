import { Resend } from 'resend';
import * as dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.RESEND_API_KEY
const resend = new Resend(API_KEY);

(async function () {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['mail@mail.com'],
            subject: 'Hello World',
            html: '<strong>It works!</strong>',
        });

        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();
