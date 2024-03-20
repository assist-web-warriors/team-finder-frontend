import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--layout-gap);
  width: var(--sidebar-size);
  position: sticky;
  top: var(--layout-gap);
  height: calc(100vh - var(--layout-gap) - var(--nav-size));
  padding-bottom: var(--layout-gap);
  a {
    font-size: var(--large-text);
    font-weight: 400;
  }
`;

export default Container;
