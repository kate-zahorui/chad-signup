import { Outlet } from 'react-router-dom';

import useWindowDimensions from '../../services/hooks/useWindowDimensions';
import { StepsSidebar } from '../';

const SharedPublicLayout = () => {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width >= 1440 && <StepsSidebar />}

      <Outlet />
    </div>
  );
};

export default SharedPublicLayout;
