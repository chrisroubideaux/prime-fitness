import React from 'react';
import Slider from '../components/Slider';
import banner from '../data/banner';

export default function Cover() {
  return (
    <div className="">
      <Slider banners={banner} />
    </div>
  );
}
