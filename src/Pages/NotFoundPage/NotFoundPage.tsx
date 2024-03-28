import { useNavigate } from 'react-router-dom';

import { KeyboardArrowLeftOutlined } from '@mui/icons-material';
import { Button, Divider } from '@mui/material';

import Toolbar from '../../components/Toolbar/Toolbar.component';
import { mainGrey } from '../../styles/Colors';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Toolbar
        button={
          <Button
            onClick={() => navigate(-1)}
            style={{
              display: 'flex',
              gap: '2px',
              paddingLeft: '0',
              height: '32px',
              color: mainGrey,
              textTransform: 'none',
              fontSize: '16px',
              paddingTop: '6px',
            }}
          >
            <KeyboardArrowLeftOutlined sx={{ mb: '2px' }} />
            Назад
          </Button>
        }
      />
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
      <h2>Запрашиваемая страница отсутствует!</h2>
    </>
  );
}

export default NotFoundPage;
