import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='nav-item'>
                <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/counter">Counter Button</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/people-list">People List</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/forms">Forms</Link>
            </li>
        </ul>
    </nav>
  )
}
