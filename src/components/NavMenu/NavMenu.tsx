import { NavLink } from 'react-router-dom';
import { NavMenuListItemStyles, NavMenuListStyles, NavMenuStyles } from './NavMenu.styles';

function NavMenu() {
  const menuItems = [
    { name: 'Главная', link: '/' },
    { name: 'Пользователи', link: '/users' },
    { name: 'Категории', link: '/categories' },
    { name: 'Товары', link: '/products' },
    { name: 'Заказы', link: '/orders' },
    { name: 'Отчеты', link: '/reports' },
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
