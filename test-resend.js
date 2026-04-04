const { Resend } = require('resend');

// Manually using the key from .env.local to test
const resend = new Resend('re_M8DXqCdh_5H8MPhaaQoHMCugDYVx5TX7P');

async function testEmail() {
  console.log('--- Resend API Test ---');
  try {
    const { data, error } = await resend.emails.send({
      from: 'Advance Transcription <support@send.advancetranscription.com>',
      to: ['puneetkushwaha88@gmail.com'], 
      subject: 'Resend API Test - Advance Transcription',
      html: '<strong>Test successful!</strong> Your Resend API is working correctly. This confirms the verification is active.'
    });

    if (error) {
      console.error('❌ Error from Resend:', error);
    } else {
      console.log('✅ Success! Check your inbox (and spam). ID:', data.id);
    }
  } catch (err) {
    console.error('❌ Exception:', err.message);
  }
}

testEmail();
