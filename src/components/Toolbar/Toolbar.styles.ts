import { styled } from 'styled-components';
import { AdminPanelSettings, Home } from '@mui/icons-material';
// import HomeIcon from '@mui/icons-material/Home';

import { grey } from '../../styles/Colors';

export const ToolbarTitleStyles = styled.h2`
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

export const HomePageIcon = styled(Home)`
  margin-bottom: 2px;
`;
