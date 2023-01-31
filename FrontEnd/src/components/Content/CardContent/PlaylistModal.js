import { useEffect, useState } from "react";
import { getAllPlaylists, addSongToPlaylist } from "../../../services/playlist";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/User";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function SimpleBackdrop({open, setOpen}) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default function Modal({ showModal, setShowModal, song }) {
    const [checkList, setCheckList] = useState([]);
    const [openBackDrop, setOpenBackDrop] = useState(false);
    let { isLoggedIn } = useSelector(selectUser);

    useEffect(() => {
        if (isLoggedIn) {
                    getAllPlaylists().then(res => {
            setCheckList(res);
        });
        }
    }, [showModal])

    const checkIfSongInPlaylist = (song, playlist) => {
        let arr = playlist.filter(item => item.song.id == song.id);
        return arr.length ? true : false;
    }

    const handleAddSongToPlaylist = async (songId, playlistId) => {
        setOpenBackDrop(true);
        await addSongToPlaylist(songId, playlistId);
        setShowModal(false);
        setOpenBackDrop(false);
    }

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-1/4 my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl font-semibold">
                                        Playlists
                                    </h3>
                                    <button
                                        className="pl-5 pb-2 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none justify-center"
                                        onClick={() => setShowModal(false)}
                                    >
                                        ×
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="checkList">
                                        <div className="list-container">
                                            {checkList.map((item, index) => (
                                                <div key={index}
                                                    onClick={() => {
                                                        handleAddSongToPlaylist(song.id, item.id);
                                                    }}
                                                >
                                                    <input id={`playlist-${item.id}`} value={item.id} type="checkbox"
                                                        className={"m-2 w-4 h-4"}
                                                        checked={checkIfSongInPlaylist(song, item.songs)}
                                                        disabled={checkIfSongInPlaylist(song, item.songs)}
                                                    />
                                                    <label htmlFor={`playlist-${item.id}`}
                                                        className={"text-lg text-center"}
                                                    >
                                                        {item.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null
            }
            <SimpleBackdrop open={openBackDrop} setOpen={setOpenBackDrop}/>
        </>
    );
}