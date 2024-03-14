import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 16px;
  padding: 40px 60px;

  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GridContainer = styled.div`
  display: grid;
  width: 720px;
  grid-template-columns: 190px auto;
  gap: 28px;
`;

export const ProgressBox = styled.div`
  width: 224px;
`;

export const PeriodBox = styled.div`
  width: 224px;
  border: 1px solid var(--grey-200, #e2e8f0);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div``;
