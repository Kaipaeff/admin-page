import { styled } from 'styled-components';

export const ProductsStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  @media (max-width: 640px) {
    padding: 12px 6px 100px;
  }
`;

export const ProductsItemsStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
