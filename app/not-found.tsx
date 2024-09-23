import { Button } from '@/components/ui/button';
import Link from 'next/link';

const error = () => {
  return (
    <main className='container h-screen content-center m-auto p-4 '>
      <div className='flex flex-col gap-4 my-4 text-center'>
        <h4>Nothing here 👀</h4>
        <Button variant='link'>
          <Link href='/'>Back to Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default error;
