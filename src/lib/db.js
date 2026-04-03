import { supabase } from './supabase';

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
