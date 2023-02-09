import { Link } from 'react-router-dom';

export const FormsNavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'>
                    <Link className='nav-link'to="/forms/controlled">Controlled Form</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/forms/uncontrolled">Uncontrolled Form</Link>
                </li>
            </ul>
        </nav>
    )
}