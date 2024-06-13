import useIsGuset from '@/hooks/useIsGuest';
import { tokenState } from '@/utils/atoms';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

export default function NavMenu() {
  const isGuset = useIsGuset();
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState);

  const handleLogout = () => {
    setToken('');
    navigate('/');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Logo</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/playground">Playground</Link>
          </li>
          {!isGuset && (
            <li>
              <details>
                <summary>Hello</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link to="/profile/john">Profile</Link>
                  </li>
                  <li>
                    <a href="#" onClick={handleLogout}>
                      Log Out
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
