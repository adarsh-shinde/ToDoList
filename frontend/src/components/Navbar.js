import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>TODOS</h1>
                </Link>
                <h2>Never miss a thing</h2>
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Logout</button>
                        </div>
                    )}

                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <span>|</span>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}

                </nav>
            </div>
        </header>
    );
}

export default Navbar;    
