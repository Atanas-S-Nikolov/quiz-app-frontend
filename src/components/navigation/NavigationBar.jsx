import '@/styles/navigation/NavigationBar.css';

import logo from '@/assets/logo-no-background.svg';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '@/constants/RouteConstants';

export default function NavigationBar() {
  return (
    <header className="header">
      <a href={HOME_ROUTE}>
        <img className='logo' src={logo} alt='Quizapp logo'/>
      </a>
      <nav className='nav'>
        <a href={LOGIN_ROUTE}>Login</a>
        <a id='register_link' href={REGISTER_ROUTE}>Register</a>
      </nav>
    </header>
  )
}
