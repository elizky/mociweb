import ProfileManagement from '@/components/ui/edit-form';
import { getProfile } from '../actions';
import { ProfileData } from '@/lib/utils';

export default async function EditPage() {
  const data = (await getProfile()) as ProfileData;

  return (
    <div className='container mx-auto p-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Profile Management
      </h2>
      <p className='text-sm text-muted-foreground mt-4'>
        Edit your profile data to update your page
      </p>
      <ProfileManagement data={data} />
    </div>
  );
}
