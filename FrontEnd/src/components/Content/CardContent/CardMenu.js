import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from '@headlessui/react';
import ModalPlaylist from './PlaylistModal';
import { useState } from 'react';


function CardMenu({song}) {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Menu as="nav" className={"relative"}>
                {({ open, close }) => (
                    <>
                        <Menu.Button className={`flex items-center rounded-3xl`} onMouseOut={close}>
                            <span>
                                <MoreVertIcon />
                            </span>
                        </Menu.Button>
                        <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-black rounded translate-y"}>
                            <Menu.Item>
                                {({ active, close }) => (
                                    <span
                                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                        onClick={close}
                                    >
                                        Add to queue
                                    </span>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active, close }) => (
                                    <span
                                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                        onClick={() => { setShowModal(true) }}
                                    >
                                        Add to playlist
                                    </span>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </>
                )}
            </Menu>
            <ModalPlaylist showModal={showModal} setShowModal={setShowModal} song={song}/>
        </>
    )

}

export default CardMenu
