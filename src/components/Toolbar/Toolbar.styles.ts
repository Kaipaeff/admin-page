import { styled } from 'styled-components';
import { AdminPanelSettings, Home } from '@mui/icons-material';

import { grey } from '../../styles/Colors';

export const ToolbarStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ToolbarTitleStyles = styled.h2`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${grey};
  text-align: 'left';
`;

export const AdminPanelSettingsIcon = styled(AdminPanelSettings)`
  margin-bottom: 2px;
`;

export const HomePageIcon = styled(Home)`
  margin-bottom: 2px;
`;

export const ToolbarControlButtonsStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
