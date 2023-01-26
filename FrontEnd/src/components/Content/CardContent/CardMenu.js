import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from '@headlessui/react';
import ModalPlaylist from './PlaylistModal';


function CardMenu() {
    const dispatch = useDispatch();

    return (
        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center rounded-3xl`}>
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
                                <ModalPlaylist children={
                                    <span
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    onClick={close}
                                >
                                    Add to playlist
                                </span>
                                }
                                />
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )

}

export default CardMenu
