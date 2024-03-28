import { styled } from 'styled-components';

export const MainStyles = styled.main`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 760px;
  margin-top: 100px;

  @media (max-width: 640px) {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100vw;
    margin-top: 40px;
    padding: 8px 12px;
  }
`;
