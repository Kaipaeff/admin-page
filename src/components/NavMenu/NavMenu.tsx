import { NavLink } from 'react-router-dom';
import { NavMenuListItemStyles, NavMenuListStyles, NavMenuStyles } from './NavMenu.styles';

function NavMenu() {
  const menuItems = [
    { name: 'Главная', link: '/admin-page' },
    { name: 'Пользователи', link: '/admin-page/users' },
    { name: 'Категории', link: '/admin-page/categories' },
    { name: 'Товары', link: '/admin-page/products' },
    { name: 'Заказы', link: '/admin-page/orders' },
    { name: 'Отчеты', link: '/admin-page/reports' },
  ];

  return (
    <NavMenuStyles>
      <NavMenuListStyles>
        {menuItems.map((item, index) => (
          <NavMenuListItemStyles key={index}>
            <NavLink to={item.link}>{item.name}</NavLink>
          </NavMenuListItemStyles>
        ))}
      </NavMenuListStyles>
    </NavMenuStyles>
  );
}

export default NavMenu;
