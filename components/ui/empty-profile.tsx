'use client';
import { useRouter } from 'next/navigation';
import { Button } from './button';

export default function EmptyProfile() {
  const router = useRouter();

  return (
    <div>
      <p>No dalta</p>
      <Button onClick={() => router.push('/')}> Please refresh</Button>
    </div>
  );
}
