import { styled } from 'styled-components';
import { AdminPanelSettings } from '@mui/icons-material';

import { grey } from '../../styles/Colors';

export const MainStyles = styled.main`
  display: flex;
  flex-direction: column;
  width: 1600px;
  height: 760px;
  margin-top: 120px;

  @media (max-width: 640px) {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100vw;
    margin-top: 40px;
    padding: 8px 12px;
  }
`;

export const MainStylesTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${grey};
  text-align: 'left';
  margin-bottom: 16px;
`;

export const AdminPanelSettingsIcon = styled(AdminPanelSettings)`
  margin-bottom: 2px;
`;

export const MainContentStyles = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;


