import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { addEntry } from '@/lib/db';

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, email, phone, address, dictationMethods, retrievalOptions } = data;

    if (!firstName || !email) {
      return NextResponse.json(
        { message: 'First name and email are required fields.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL || 'puneetkushwaha88@gmail.com';

    // Persist to local JSON database for Admin Portal
    await addEntry('signups', { 
      firstName, 
      email, 
      phone, 
      address, 
      dictationMethods, 
      retrievalOptions 
    });

    // 1. Send the admin notification
    await resend.emails.send({
      from: 'Advance Transcription Enrollment <enrollment@advancetranscription.com>',
      to: [recipientEmail],
      subject: `New Signup: ${firstName}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 40px auto; color: #020617; line-height: 1.6;">
              <div style="background: #10b981; padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
                <span style="color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; display: inline-block;">Advance</span>
                <span style="color: #ffffff; font-size: 10px; display: block; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-top: 6px;">Transcription Enrollment</span>
              </div>
              
              <div style="background: #ffffff; padding: 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);">
                <div style="display: inline-block; padding: 4px 12px; background: #ecfdf5; color: #10b981; border-radius: 4px; font-size: 12px; font-weight: 800; text-transform: uppercase; margin-bottom: 30px;">
                  Internal: New Client Signup Received
                </div>
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                  <tr>
                    <td width="50%" style="vertical-align: top; padding-right: 10px;">
                      <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Provider Name</div>
                      <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${firstName}</div>
                    </td>
                    <td width="50%" style="vertical-align: top; padding-left: 10px;">
                      <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Email</div>
                      <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${email}</div>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; margin-bottom: 24px;">
                    <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Dictation Methods</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${dictationMethods.map(m => `<span style="padding: 4px 10px; background: #f1f5f9; border-radius: 4px; font-size: 12px; font-weight: 600;">${m}</span>`).join(' ')}
                    </div>
                </div>

                <div style="text-align: center; margin-top: 40px;">
                  <a href="mailto:${email}" style="display: inline-block; background: #10b981; color: #ffffff !important; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">
                    View Signup Details
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // 2. Send the professional welcome to the user
    await resend.emails.send({
      from: 'Advance Transcription Enrollment <enrollment@advancetranscription.com>',
      to: [email],
      subject: "Welcome to Advance Transcription - Enrollment Received",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 40px auto; color: #020617; line-height: 1.6;">
              <div style="background: #10b981; padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
                <span style="color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; display: inline-block;">Advance</span>
                <span style="color: #ffffff; font-size: 10px; display: block; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-top: 6px;">Transcription Enrollment</span>
              </div>
              
              <div style="background: #ffffff; padding: 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);">
                <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin-bottom: 20px;">Welcome Aboard, ${firstName}!</h2>
                <p style="color: #475569; font-size: 16px; margin-bottom: 24px;">
                  Thank you for choosing Advance Transcription as your documentation partner. We have received your enrollment details and your preferred dictation methods. 
                  Our operations team is now setting up your secure account and dictation lines.
                </p>
                
                <div style="background: #f0fdf4; padding: 24px; border-radius: 8px; border: 1px solid #bbf7d0; margin-bottom: 30px;">
                  <h3 style="font-size: 14px; font-weight: 800; color: #166534; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 12px;">Onboarding Protocol</h3>
                  <ul style="margin: 0; padding-left: 20px; color: #14532d; font-size: 14px;">
                    <li style="margin-bottom: 8px;">System Setup: We configure your transcription workflow.</li>
                    <li style="margin-bottom: 8px;">Line Activation: You{"'"}ll receive your dedicated toll-free dictation ID.</li>
                    <li>Security: We finalize the HIPAA-compliant data pipeline for your practice.</li>
                  </ul>
                </div>

                <p style="color: #475569; font-size: 15px; margin-bottom: 30px;">
                  Expect a call from our onboarding specialist within 1-2 business hours to finalize your ID and provide your secure portal credentials.
                </p>

                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://advancetranscription.com/about" style="display: inline-block; background: #10b981; color: #ffffff !important; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">
                    Our Commitment to Quality
                  </a>
                </div>
              </div>

              <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #94a3b8; padding-bottom: 40px;">
                &copy; ${new Date().getFullYear()} Advance Transcription Services. <br/>
                Precision Healthcare Documentation Since 1999.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { message: 'Failed to send enrollment notification.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Signup complete! Welcome aboard.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your signup.' },
      { status: 500 }
    );
  }
}
