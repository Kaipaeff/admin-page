import { styled } from 'styled-components';
import { EditOutlined, DeleteOutlined, CheckCircleOutline, CancelOutlined } from '@mui/icons-material';

import { blue, neonGreen, textColor } from '../../styles/Colors';
import { IDescrProps, IImageProps, IInfoProps, IPriceProps, IRateProps, ITitleProps } from '../../types/Interfaces';

export const ProductItemStyles = styled.div`
  margin-bottom: 24px;
  padding: 2px;

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

export const ProductItemImageStyles = styled.img<IImageProps>`
  max-height: 100%;
  width: ${({ width }) => width || '70px'};
`;

export const ProductItemInfoStyles = styled.div<IInfoProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
  width: 100%;
  gap: ${({ $gap }) => $gap || '8px'};
`;

export const ProductItemTitleStyles = styled.p<ITitleProps>`
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-weight: 700;
  color: ${neonGreen};
`;

export const ProductItemDescrStyles = styled.p<IDescrProps>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
`;

export const ProductItemRatingStyles = styled.p<IRateProps>`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProductItemPriceStyles = styled.p<IPriceProps>`
  color: #b12704;
  font-size: ${({ fontSize }) => fontSize || '24px'};
`;
