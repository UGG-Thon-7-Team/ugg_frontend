import { Outlet } from 'react-router-dom';

import Wrapper from '@commons/wrapper/Wrapper';
import Navbar from '@commons/navbar/Navbar';

export default function MainLayout() {
  return (
    <Wrapper>
      <Outlet />
      <Navbar />
    </Wrapper>
  );
}
