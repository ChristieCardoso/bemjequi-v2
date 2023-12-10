import { useState } from 'react';

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
      <img src='https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/f8blhs3qq8uoxnbohexe' alt="loader" />
    </div>
  );
};
