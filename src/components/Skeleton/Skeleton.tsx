import React from 'react';
import ContentLoader from 'react-content-loader';
import { ProductItemStyles } from '../ProductItem/ProductItem.styles';
import { Card } from '@mui/material';

interface MyLoaderProps {}

export const Skeleton: React.FC<MyLoaderProps> = () => (
  <ProductItemStyles>
    <Card sx={{ maxWidth: 1 }}>
      <ContentLoader
        speed={2}
        width={1232}
        height={162}
        viewBox="0 0 1232 162"
        backgroundColor="#f3f3f3"
        foregroundColor="#c7c7c7"
      >
        <rect x="260" y="38" rx="3" ry="3" width="400" height="16" />
        <rect x="260" y="73" rx="3" ry="3" width="870" height="12" />
        <rect x="260" y="102" rx="3" ry="3" width="100" height="22" />
        <rect x="206" y="36" rx="3" ry="3" width="3" height="100" />
        <rect x="80" y="34" rx="3" ry="3" width="70" height="100" />
      </ContentLoader>
    </Card>
  </ProductItemStyles>
);
