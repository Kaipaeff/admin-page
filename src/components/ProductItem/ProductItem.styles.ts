import { styled } from 'styled-components';
import { CheckCircleOutline, CancelOutlined } from '@mui/icons-material';

import { blue, mainGrey, textColor } from '../../styles/Colors';
import {
  IDescrProps,
  IImageContainerProps,
  IInfoProps,
  IPriceProps,
  IRateProps,
  ITitleProps,
} from '../../types/Interfaces';

export const ProductItemStyles = styled.div`
  margin-bottom: 24px;
  padding: 2px;
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

export const ProductItemImageContainerStyles = styled.div<IImageContainerProps>`
  display: flex;
  flex-basis: 1;
  flex-shrink: 0;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 120px;
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
  display: flex;
  justify-content: space-between;
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-weight: 800;
  color: ${mainGrey};
`;

export const ProductItemDescrStyles = styled.p<IDescrProps>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  overflow: ${({ overflow }) => overflow || 'hidden'};
  text-overflow: ${({ $textOverflow }) => $textOverflow || 'ellipsis'};
  display: ${({ display }) => display || '-webkit-box'};
  -webkit-line-clamp: ${({ $webkitLineClamp }) => $webkitLineClamp || '1'};
  -webkit-box-orient: ${({ $webkitBoxOrient }) => $webkitBoxOrient || 'vertical'};
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
