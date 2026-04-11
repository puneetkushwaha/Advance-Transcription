import { supabase, supabaseAdmin } from './supabase';

export async function getDB() {
  try {
    const { data: contacts } = await supabase.from('contacts').select('*').order('timestamp', { ascending: false });
    const { data: demo_requests } = await supabase.from('demo_requests').select('*').order('timestamp', { ascending: false });
    const { data: signups } = await supabase.from('signups').select('*').order('timestamp', { ascending: false });

    return { 
      contacts: contacts || [], 
      demo_requests: demo_requests || [], 
      signups: signups || []
    };
  } catch (error) {
    console.error('Supabase fetch error:', error);
    return { contacts: [], demo_requests: [], signups: [] };
  }
}

export async function addEntry(category, entry) {
  try {
    let table = category;
    let data = { ...entry };

    // Map frontend keys to database snake_case keys if necessary
    if (category === 'contacts' || category === 'contact_submissions') {
      data = {
        name: entry.name,
        email: entry.email,
        phone: entry.phone,
        service_type: entry.serviceType,
        organization_name: entry.organizationName,
        message: entry.message
      };
    } else if (category === 'demo_requests') {
      data = {
        name: entry.name,
        email: entry.email,
        phone: entry.phone,
        message: entry.message,
        file_url: entry.fileUrl
      };
    } else if (category === 'signups') {
      data = {
        first_name: entry.firstName,
        email: entry.email,
        phone: entry.phone,
        address: entry.address,
        dictation_methods: entry.dictationMethods,
        retrieval_options: entry.retrievalOptions
      };
    }

    const { error } = await supabase.from(table).insert([data]);
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Supabase insert error:', error);
    return false;
  }
}

export async function getSettings() {
  try {
    const { data, error } = await supabaseAdmin.from('site_settings').select('*');
    if (error) {
      console.error('[Settings] Supabase fetch error:', JSON.stringify(error, null, 2));
      throw error;
    }
    
    console.log('[Settings] Successfully fetched from DB. Row count:', data?.length);
    
    const settings = {};
    data.forEach(item => {
      settings[item.key] = item.value;
    });
    
    if (Object.keys(settings).length > 0) {
      return settings;
    }
    
    throw new Error('No settings found in database');
  } catch (error) {
    console.error('[Settings] Falling back to ENV:', error.message);
    return {
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      client_phone: process.env.NEXT_PUBLIC_CLIENT_PHONE,
      address_line1: process.env.NEXT_PUBLIC_CLIENT_ADDRESS_LINE1,
      address_line2: process.env.NEXT_PUBLIC_CLIENT_ADDRESS_LINE2,
    };
  }
}

export async function updateSetting(key, value) {
  try {
    console.log(`[Admin] Attempting to update setting: ${key} = ${value}`);
    
    const { data, error } = await supabaseAdmin
      .from('site_settings')
      .upsert({ key, value, updated_at: new Date() })
      .select();
    
    if (error) {
      console.error(`[Admin ERROR] Supabase update fail for key ${key}:`, JSON.stringify(error, null, 2));
      throw error;
    }
    
    console.log(`[Admin SUCCESS] Updated setting: ${key}. Row:`, data);
    return true;
  } catch (error) {
    console.error(`[Admin EXCEPTION] Failed to update setting ${key}:`, error.message || error);
    return false;
  }
}
