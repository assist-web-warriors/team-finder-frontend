import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 100px;
  a {
    font-size: var(--large-text);
    font-weight: 400;
  }
  svg {
    background-color: #fff;
  }
`;

export default Container;
