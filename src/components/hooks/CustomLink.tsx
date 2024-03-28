import styled from 'styled-components';

import { Link, useMatch } from 'react-router-dom';
import { CustomLinkProps } from '../../types/Interfaces';

import { mainGrey, neonGreen } from '../../styles/Colors';

const StyledLink = styled(Link)`
  color: ${mainGrey};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${neonGreen};
  }
`;

const CustomLink = ({ children, to, ...props }: CustomLinkProps) => {
  const match = useMatch(to);
  return (
    <StyledLink
      to={to}
      style={{
        color: match ? neonGreen : mainGrey,
      }}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

export default CustomLink;
