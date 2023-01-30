import { Icon } from '../../icons/Icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/User';
import { useState } from 'react';
import RequireLogin from '../Content/RequireLogin';

function Menu() {
    const style = "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded px-4 hover:text-white";
    const activeStyle = "bg-active text-white";
    const { isLoggedIn } = useSelector(selectUser);
    const [showModal, setShowModal] = useState(false);

    return (
        <nav className="px-2 mt-4">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? activeStyle + " " + style : style} exact>
                        <span>
                            <Icon name="home" />
                        </span>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} className={({ isActive }) => isActive ? activeStyle + " " + style : style}>
                        <span>
                            <Icon name="search" />
                        </span>
                        Search
                    </NavLink>
                </li>
                <li>
                    {isLoggedIn ?
                        <NavLink to={"/playlists"} className={({ isActive }) => isActive ? activeStyle + " " + style : style}>
                            <span>
                                <Icon name="collection" />
                            </span>
                            Playlists
                        </NavLink>
                        :
                        <>
                            <NavLink to={"/"} className={({ isActive }) => isActive ? style : activeStyle + " " + style}
                            onClick={() => setShowModal(true)}
                            >
                                <span>
                                    <Icon name="collection" />
                                </span>
                                Playlists
                            </NavLink>
                            <RequireLogin showModal={showModal} setShowModal={setShowModal} />
                        </>

                    }
                </li>
            </ul>
        </nav>
    )

}

export default Menu