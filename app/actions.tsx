'use server';

import { kv } from '@vercel/kv';
import { ProfileData } from '@/lib/utils';
import { redirect } from 'next/navigation';

export async function getProfile() {
  //   await deleteProfile();
  //   await saveGenericProfile();
  try {
    const profile = await kv.get<ProfileData>('data');
    console.log('✅ Getting profile data from KV ========> ✅', profile);
    return profile;
  } catch (error) {
    console.error('Error getting profile data:', error);
  }
}

export async function saveProfile(data: ProfileData): Promise<void> {
  console.log('👀 data from server action ===========> 👀', data);
  try {
    await deleteProfile();
    await kv.set('data', data);
    console.log('🚀 Profile data saved successfully 🚀');
  } catch (error) {
    console.error('❌ Error saving profile data: ❌', error);
  } finally {
    redirect('/');
  }
}

// export async function saveGenericProfile() {
//   try {
//     await kv.set('data', profileData);
//     console.log('Profile data saved successfully.');
//   } catch (error) {
//     console.error('Error saving profile data:', error);
//   }
// }

export async function deleteProfile() {
  console.log('🧹 Deleting... 🧹');
  try {
    await kv.del('data'); // Elimina los datos del perfil
    console.log('🗑️ Profile data deleted successfully. 🗑️');
  } catch (error) {
    console.error('❌ Error deleting profile data: ❌', error);
  }
}
