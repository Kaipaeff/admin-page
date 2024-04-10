import { NavLink } from 'react-router-dom';
import { CustomLinkProps } from '../../types/Interfaces';

import { mainGrey, primaryBlue } from '../../styles/Colors';

const CustomLink = ({ children, to }: CustomLinkProps) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : '',
          color: isActive ? primaryBlue : mainGrey,
        };
      }}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
