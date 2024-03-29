import { styled } from 'styled-components';
import { EditOutlined, DeleteOutlined, CheckCircleOutline, CancelOutlined } from '@mui/icons-material';

import { blue, textColor } from '../../styles/Colors';
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
  max-height: ${({ maxHeight }) => maxHeight || '130px'};
  width: ${({ width }) => width || '70px'};
  margin-left: ${({ marginLeft }) => marginLeft || ''};
  margin-right: ${({ marginRight }) => marginRight || ''};
`;

export const ProductItemInfoStyles = styled.div<IInfoProps>`
  display: ${({ display }) => display || ''};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  height: ${({ maxHeight }) => maxHeight || ''};
  width: ${({ width }) => width || ''};
  padding: ${({ padding }) => padding || ''};
  margin-right: ${({ marginRight }) => marginRight || ''};
`;

export const ProductItemTitleStyles = styled.p<ITitleProps>`
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '8px'};
  color: ${({ color }) => color || ''};
`;

export const ProductItemDescrStyles = styled.p<IDescrProps>`
  font-size: 16px;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '12px'};
`;

export const ProductItemRatingStyles = styled.p<IRateProps>`
  display: ${({ display }) => display || ''};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  align-items: ${({ alignItems }) => alignItems || ''};
  gap: ${({ gap }) => gap || ''};
  margin-bottom: ${({ marginBottom }) => marginBottom || '12px'};
`;

export const ProductItemPriceStyles = styled.p<IPriceProps>`
  width: ${({ width }) => width || ''};
  margin-bottom: ${({ marginBottom }) => marginBottom || ''};
  font-size: ${({ fontSize }) => fontSize || '18px'};
  text-align: ${({ textAlign }) => textAlign || ''};
`;
