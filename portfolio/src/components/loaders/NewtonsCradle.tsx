'use client';

import { NewtonsCradle } from 'ldrs/react';
import 'ldrs/react/NewtonsCradle.css';

interface LoaderProps {
  size?: string;
  speed?: number;
  color?: string;
}

const NewtonsCradleLoader = ({ size = '78', speed = 1.5, color = 'black' }: LoaderProps) => {
  return (
    <div className="flex justify-center items-center">
      <NewtonsCradle size={size} speed={speed} color={color} />
    </div>
  );
};

export default NewtonsCradleLoader;
