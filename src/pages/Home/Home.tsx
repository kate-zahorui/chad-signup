import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useWindowDimensions from '../../services/hooks/useWindowDimensions';

// import s from './Home.module.css';

const Home: React.FunctionComponent = () => {
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  useEffect(() => {
    if (width < 1440) {
      navigate('/no-user-access');
    }
  }, [width, navigate]);

  return <main>Home</main>;
};

export default Home;
