import { useState } from 'react';

import loaderImg from '../../assets/Design sem nome.gif';

import './Loader.scss';

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  loader();

  return (
    <div className={isLoading ? 'loader' : 'loader fade-out'}>
      <img src={loaderImg} alt="loader" />
    </div>
  );
};
