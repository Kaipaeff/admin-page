import { styled } from 'styled-components';
import { grey, white } from '../../styles/Colors';

export const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: ${white};
  /* box-shadow: 0 4px 12px 3px rgba(2, 9, 51, 0.07); */
  /* z-index: 3; */

  @media (max-width: 640px) {
    padding: 0 12px 4px;
    height: 42px;
  }
`;

export const LogoImage = styled.img`
  width: 120px;

  @media (max-width: 640px) {
    width: 90px;
    margin-right: 24px;
  }
`;

export const HeaderContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1600px;
  height: 100%;

  @media (max-width: 640px) {
    width: 100vw;
    padding: 0 12px;
  }
`;

export const ControlPanelStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-left: auto;

  @media (max-width: 640px) {
    gap: 8px;
  }
`;

export const GreetingTextStyles = styled.span`
  padding-top: 4px;
  color: ${grey};
  font-weight: 600;
`;
