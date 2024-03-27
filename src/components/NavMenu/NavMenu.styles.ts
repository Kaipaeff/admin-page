import { styled } from 'styled-components';
import { neonGreen } from '../../styles/Colors';

export const NavMenuStyles = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-right: 24px;
`;

export const NavMenuListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavMenuListItemStyles = styled.li`
  &:hover {
    color: ${neonGreen};
  }
`;
