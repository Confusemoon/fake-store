import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container flex space-between">
                <h1>Fake Store-711</h1>
                <div className="flex header-list">
                    <nav>
                        <ul className="flex">
                            <li>
                                <NavLink className={navData => (navData.isActive ? 'active' : '')} to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={navData => (navData.isActive ? 'active' : '')} to='/Product'>
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={navData => (navData.isActive ? 'active' : '')} to='/Cart'>
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;