import { NextResponse } from 'next/server';
import { updateSetting } from '@/lib/db';
import { revalidatePath } from 'next/cache';


export async function POST(request) {
  try {
    const passcode = request.headers.get('x-admin-passcode');
    const correctPasscode = process.env.ADMIN_PASSCODE || 'admin123';

    if (passcode !== correctPasscode) {
      console.warn('[Admin Auth] Unauthorized access attempt with passcode:', passcode);
      return NextResponse.json({ error: 'Unauthorized Access' }, { status: 401 });
    }

    const { settings } = await request.json();
    console.log('Incoming settings update request:', settings);
    
    // settings is an object like { client_email: '...', client_phone: '...', ... }
    const promises = Object.entries(settings).map(([key, value]) => 
      updateSetting(key, value)
    );

    const results = await Promise.all(promises);
    console.log('[Admin] Update results:', results);
    
    if (results.every(res => res === true)) {
      console.log('[Admin] All settings updated successfully.');
      
      // Invalidate cache for all key pages to reflect new settings immediately
      revalidatePath('/');
      revalidatePath('/contact');
      revalidatePath('/privacy');
      revalidatePath('/admin');
      
      return NextResponse.json({ message: 'Settings updated successfully' });
    } else {
      console.error('[Admin] Some settings failed to update. Results map:', results);
      return NextResponse.json({ error: 'Some settings failed to update' }, { status: 500 });
    }
  } catch (error) {
    console.error('Admin settings update error:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
