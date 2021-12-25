import { Stack } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

const SkeletonSignIn = () => {
  return (
    <section className='d-flex align-items-center mt-2 mb-0'>
      <Stack className='w-100'>
        <Skeleton
          variant='text'
          width={100.5}
          height={53.13}
          className='mx-auto'
          animation='wave'
        />
        <Stack>
          <Skeleton
            className={'mt-1 mx-auto  w-50'}
            variant='text'
            width={320.5}
            height={100.13}
            animation='wave'
          />

          <Skeleton
            className={'mt-2  mx-auto w-50'}
            variant='text'
            width={320.5}
            height={100.13}
            animation='wave'
          />
          <Skeleton
            variant='text'
            className='mx-auto'
            width={150}
            height={90}
            animation='wave'
          />
        </Stack>
      </Stack>

      <Stack className='w-50'>
        <Skeleton
          variant='rectangular'
          width={540}
          height={360}
          animation='wave'
        />
      </Stack>
    </section>
  );
};

export default SkeletonSignIn;
