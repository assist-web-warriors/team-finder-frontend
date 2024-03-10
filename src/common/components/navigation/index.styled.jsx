import styled from 'styled-components';

const Container = {
  Default: styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    height: var(--nav-size);
    img {
      background-color: #fff;
      width: 106px;
      height: 34px;
    }
  `,
  Wrapper: styled.div`
    width: var(--layout);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

export default Container;
