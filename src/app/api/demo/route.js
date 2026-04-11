import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { addEntry, getSettings } from '@/lib/db';

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

    const settings = await getSettings();
    const recipientEmail = settings.client_email || 'info@advancetranscription.com';
    
    // Persist to Supabase for Admin Portal
    await addEntry('demo_requests', { 
      name, 
      email, 
      phone, 
      message, 
      fileUrl: fileUrl 
    });
    
    // 1. Send the admin notification
    await resend.emails.send({
      from: 'Advance Transcription Demo <demo@advancetranscription.com>',
      to: [recipientEmail],
      subject: `New Demo Request from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 40px auto; color: #020617; line-height: 1.6;">
              <div style="background: #0f172a; padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
                <span style="color: #ffffff; font-size: 26px; font-weight: 700; font-family: serif; letter-spacing: -0.5px; display: inline-block;">Advance</span>
                <span style="color: #0047ff; font-size: 10px; display: block; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-top: 6px;">Transcription</span>
              </div>
              
              <div style="background: #ffffff; padding: 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);">
                <div style="display: inline-block; padding: 4px 12px; background: #f0f9ff; color: #38bdf8; border-radius: 4px; font-size: 12px; font-weight: 800; text-transform: uppercase; margin-bottom: 30px;">
                  Internal: New Demo Request Received
                </div>
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                  <tr>
                    <td width="50%" style="vertical-align: top; padding-right: 10px;">
                      <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Prospect Name</div>
                      <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${name}</div>
                    </td>
                    <td width="50%" style="vertical-align: top; padding-left: 10px;">
                      <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Email</div>
                      <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${email}</div>
                    </td>
                  </tr>
                </table>

                <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</div>
                <div style="background: #f8fafc; border-left: 4px solid #38bdf8; padding: 24px; border-radius: 8px; font-style: italic; color: #334155; font-size: 15px;">
                  "${message.replace(/\n/g, '<br/>')}"
                </div>

                ${fileUrl ? `
                <div style="margin-top: 24px;">
                    <div style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Uploaded Media</div>
                    <a href="${fileUrl}" style="color: #0047ff; text-decoration: underline; font-weight: bold;">View File</a>
                </div>
                ` : ''}

                <div style="text-align: center; margin-top: 40px;">
                  <a href="mailto:${email}" style="display: inline-block; background: #0047ff; color: #ffffff !important; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">
                    Reply to Prospect
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // 2. Send the professional confirmation to the user
    await resend.emails.send({
      from: 'Advance Transcription Demo <demo@advancetranscription.com>',
      to: [email],
      subject: "Your Demo Request - Advance Transcription",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 40px auto; color: #020617; line-height: 1.6;">
              <div style="background: #0f172a; padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
                <span style="color: #ffffff; font-size: 26px; font-weight: 700; font-family: serif; letter-spacing: -0.5px; display: inline-block;">Advance</span>
                <span style="color: #0047ff; font-size: 10px; display: block; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-top: 6px;">Transcription</span>
              </div>
              
              <div style="background: #ffffff; padding: 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);">
                <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin-bottom: 20px;">We{"'"}ve Received Your Demo Request, ${name.split(' ')[0]}</h2>
                <p style="color: #475569; font-size: 16px; margin-bottom: 24px;">
                  Thank you for starting your demo with Advance Transcription. We have received your audio/visual media and your specific requirements. 
                  Our transcriptionists are already getting to work on your sample.
                </p>
                
                <div style="background: #f0fdf4; padding: 24px; border-radius: 8px; border: 1px solid #bbf7d0; margin-bottom: 30px;">
                  <h3 style="font-size: 14px; font-weight: 800; color: #166534; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 12px;">Next Steps</h3>
                  <ul style="margin: 0; padding-left: 20px; color: #14532d; font-size: 14px;">
                    <li style="margin-bottom: 8px;">Analysis: We analyze your recording quality and formatting.</li>
                    <li style="margin-bottom: 8px;">Production: We transcribe a high-precision sample for you.</li>
                    <li>Delivery: You will receive the completed sample and a full quote within 24 hours.</li>
                  </ul>
                </div>

                <div style="text-align: center; margin-top: 40px;">
                  <p style="font-size: 14px; color: #64748b; margin-bottom: 24px;">Questions about the process? Reply to this email or visit our Help Center.</p>
                  <a href="https://advancetranscription.com/services/medical-transcription" style="display: inline-block; background: #0047ff; color: #ffffff !important; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">
                    Learn More About Our Tech
                  </a>
                </div>
              </div>

              <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #94a3b8; padding-bottom: 40px;">
                &copy; ${new Date().getFullYear()} Advance Transcription Services. <br/>
                ${settings.address_line1}, ${settings.address_line2}
              </div>
            </div>
          </body>
        </html>
      `,
    });

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
