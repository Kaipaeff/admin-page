import { useNavigate } from 'react-router-dom';

import { KeyboardBackspace, ReportGmailerrorred } from '@mui/icons-material';
import { Button, Divider } from '@mui/material';

import Toolbar from '../../components/Toolbar/Toolbar.component';
import { mainGrey } from '../../styles/Colors';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '11px',
          marginRight: 'auto',
          color: mainGrey,
        }}
      >
        <KeyboardBackspace />
        назад
      </Button>

      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
      <Toolbar title={'Запрашиваемая страница отсутствует!'} icon={<ReportGmailerrorred />} />
    </>
  );
}

export default NotFoundPage;
