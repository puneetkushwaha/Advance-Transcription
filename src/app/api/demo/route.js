import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { addEntry } from '@/lib/db';

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message, fileUrl } = data;

    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL || 'puneetkushwaha88@gmail.com';
    
    // Persist to Supabase for Admin Portal
    await addEntry('demo_requests', { 
      name, 
      email, 
      phone, 
      message, 
      fileUrl: fileUrl 
    });
    
    // Send the email using Resend (Include the link in the email)
    const { error } = await resend.emails.send({
      from: 'Advance Transcription Demo <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: `New Demo Request from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 40px auto; color: #020617; line-height: 1.6;">
              <!-- Header -->
              <div style="background: #0f172a; padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
                <span style="color: #ffffff; font-size: 26px; font-weight: 700; font-family: serif; letter-spacing: -0.5px; display: inline-block;">Advance</span>
                <span style="color: #0047ff; font-size: 10px; display: block; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-top: 6px;">Transcription</span>
              </div>
              
              <!-- Content -->
              <div style="background: #ffffff; padding: 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);">
                <div style="display: inline-block; padding: 4px 12px; background: #f0f9ff; color: #38bdf8; border-radius: 4px; font-size: 12px; font-weight: 800; text-transform: uppercase; margin-bottom: 30px;">
                  New Demo Request Received
                </div>
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                  <tr>
                    <td width="50%" style="vertical-align: top; padding-right: 10px;">
                      <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Prospect Name</div>
                      <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${name}</div>
                    </td>
                  </tr>
                </table>

                <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</div>
                <div style="background: #f8fafc; border-left: 4px solid #38bdf8; padding: 24px; border-radius: 8px; font-style: italic; color: #334155; font-size: 15px;">
                  "${message.replace(/\n/g, '<br/>')}"
                </div>

                ${fileUrl ? `
                <div style="margin-top: 24px;">
                    <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Attachments (Vocal/Video)</div>
                    <a href="${fileUrl}" style="color: #0047ff; text-decoration: underline; font-weight: bold;">View Uploaded Media</a>
                </div>
                ` : ''}

                <div style="text-align: center; margin-top: 40px;">
                  <a href="mailto:${email}" style="display: inline-block; background: #0047ff; color: #ffffff !important; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">
                    View Demo Request
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { message: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Your demo request has been received!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
