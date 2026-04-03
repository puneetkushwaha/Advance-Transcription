import { NextResponse } from 'next/server';
import { getDB } from '@/lib/db';

export async function GET(request) {
  try {
    const passcode = request.headers.get('x-admin-passcode');
    const correctPasscode = process.env.ADMIN_PASSCODE || 'admin123';

    if (passcode !== correctPasscode) {
      return NextResponse.json({ error: 'Unauthorized Access' }, { status: 401 });
    }

    const db = await getDB();
    return NextResponse.json(db);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
