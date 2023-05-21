import React from 'react';

export type BannerData = {
  message: string;
  state: 'success' | 'error';
}
export default function Banner({ banner: { message, state } }: { banner: BannerData }) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '❗️';

  return (
    <p className={`p-2 mt-3 rounded-md ${isSuccess ? 'bg-green-300' : 'bg-red-300'}`}>
      {`${icon} ${message}`}
    </p>
  );
}

