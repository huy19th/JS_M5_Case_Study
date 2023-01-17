import {Route} from 'react-router-dom';
import LatestSong from "../components/Main/LatestSong/LatestSong";
import Album from "../components/Main/Album/ListAlbum";
export default function Main(){
    return (
        <>
            <LatestSong/>
            <Album/>
        </>
    )
}