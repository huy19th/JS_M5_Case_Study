import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistDetail from "./PlaylistDetail";
import { getPlaylist } from "../../../services/playlist";

export default function PlaylistMain() {
    const [playlist, setPlaylist] = useState({});
    let { playlistId } = useParams();

    useEffect(() => {
        getPlaylist(playlistId)
        .then(res => {
            setPlaylist(res);
            console.log(res);
        })
        
    }, []);
    return (
        <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-1'>
                <PlaylistTitle item={playlist}/>
            </div>
            <div className='col-span-2 px-5'>
                <PlaylistDetail item={playlist}/>
            </div>
        </div>
    )
}