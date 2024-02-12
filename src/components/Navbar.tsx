import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-sky-100 p-5 shadow-md">
            <div className="flex items-center flex-shrink-0 text-stone-600 mr-6">
                <Link to="/" className="font-semibold text-2xl tracking-tight">Digital Library</Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={dropDown} className="flex text-xl items-center px-3 py-2 text-stone-600 hover:text-neutral-400">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isVisible ? 'block' : 'hidden'}`}>
            <hr className='border border-sky-900 opacity-10 mt-4 lg:hidden'></hr>
                <div className="text-md font-medium lg:flex-grow text-right">
                    <button>
                        <Link to="/" onClick={clicked} className="block mt-4 lg:inline-block lg:mt-0 text-neutral-600 hover:text-neutral-400 mr-4">
                        <i className="fa-solid fa-house-chimney"></i> Home
                        </Link>
                    </button>
                    <button>
                        <Link to="/books" onClick={clicked} className="block mt-4 lg:inline-block lg:mt-0 text-neutral-600 hover:text-neutral-400 mr-4">
                            <i className="fa-solid fa-book-bookmark"></i> Books
                        </Link>
                    </button>
                    {!isAuthenticated ? (
                        <button onClick={signInOnClick} className="block mt-4 lg:inline-block lg:mt-0 text-neutral-600 hover:text-neutral-400 mr-4">
                            <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                        </button>
                    ) : (
                        <button onClick={signOutOnClick} className="block mt-4 lg:inline-block lg:mt-0 text-neutral-600 hover:text-neutral-400 mr-4">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar
