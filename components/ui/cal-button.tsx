'use client';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Button } from './button';
export default function CalButton({ time, calUser }: { time: string; calUser: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: time });
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button
      variant='outline'
      size='sm'
      data-cal-namespace={time}
      data-cal-link={`${calUser}/${time}`}
      data-cal-config='{"layout":"month_view"}'
    >
      {time} meeting
    </Button>
  );
}
