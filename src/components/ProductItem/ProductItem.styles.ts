import { styled } from 'styled-components';
import { EditOutlined, DeleteOutlined, CheckCircleOutline, CancelOutlined } from '@mui/icons-material';

import { blue, textColor } from '../../styles/Colors';

export const ProductItemStyles = styled.div`
  margin-bottom: 24px;

  @media (max-width: 640px) {
    margin-bottom: 12px;
  }
`;

export const EditOutlinedIconStyles = styled(EditOutlined)`
  color: ${textColor};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }
`;

export const DeleteOutlinedIconStyles = styled(DeleteOutlined)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }

  @media (max-width: 640px) {
    margin-right: 0;
    scale: 0.8;
  }
`;

export const SaveOutlineIconStyles = styled(CheckCircleOutline)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 40px;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }

  @media (max-width: 640px) {
    margin-right: 12px;
    margin-left: 12px;
  }
`;

export const CancelOutlineIconStyles = styled(CancelOutlined)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }

  @media (max-width: 640px) {
    margin-right: 0;
  }
`;

export const ProductItemImageStyles = styled.img`
  margin-right: 8px;
  width: 60px;
`;

export const ProductItemTitleStyles = styled.p`
  width: 200px;
  font-size: 16px;
  font-weight: 700;
  margin-left: 12px;
`;

export const ProductItemDescrStyles = styled.p`
  width: 800px;
  font-size: 16px;
  font-weight: 500;
`;

export const ProductItemPriceStyles = styled.p`
  width: 50px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
