import { Outlet } from 'react-router-dom';

import Wrapper from '@commons/wrapper/Wrapper';

export default function MainLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
