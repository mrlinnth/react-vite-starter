import NavMenu from '@/components/menus/NavMenu';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <NavMenu />
      <Outlet />
    </div>
  );
}
