import styled from 'styled-components';

const Container = {
  Default: styled.main`
    display: flex;
    flex-direction: column;
    gap: var(--layout-gap);
  `,
  Wrapper: styled.span`
    display: flex;
    justify-content: center;
  `,
  Content: styled.span`
    display: flex;
    justify-content: space-between;
    width: var(--layout);
    gap: var(--layout-gap);
  `,
  Children: styled.span`
    display: flex;
    width: calc(var(--layout) - var(--sidebar-size) - var(--layout-gap));
    padding-bottom: var(--layout-gap);
    border-radius: 16px;
  `,
};

export default Container;
