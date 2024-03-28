import { NavMenuListStyles, NavMenuStyles } from './NavMenu.styles';
import CustomLink from '../hooks/CustomLink';

function NavMenu() {
  const menuItems = [
    { name: 'Главная', link: '/' },
    { name: 'Пользователи', link: 'users' },
    { name: 'Категории', link: 'categories' },
    { name: 'Товары', link: 'products' },
    { name: 'Заказы', link: 'orders' },
    { name: 'Отчеты', link: 'reports' },
  ];

  return (
    <NavMenuStyles>
      <NavMenuListStyles>
        {menuItems.map((item, index) => (
          <CustomLink to={item.link} key={index}>
            {item.name}
          </CustomLink>
        ))}
      </NavMenuListStyles>
    </NavMenuStyles>
  );
}

export default NavMenu;
