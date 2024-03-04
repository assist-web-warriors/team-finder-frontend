import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer, Main } from './index.styled';

export const BaseLayout = ({ navigationSlot, children }) => {
  return (
    <Suspense fallback={<>Loading</>}>
      <LayoutContainer>
        {navigationSlot && navigationSlot}
        <Main>
          <Outlet />
          {children}
        </Main>
      </LayoutContainer>
    </Suspense>
  );
};
