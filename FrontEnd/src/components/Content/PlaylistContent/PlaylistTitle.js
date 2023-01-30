import { playlistImage } from "../../../static/image"

export default function PlaylistTitle({ item }) {
    return (
        <>
            <div className="pt-[100%] mb-4 relative">
                <img src={item.songs ? (item.songs[0] ? item.songs[0].song.image : playlistImage) : playlistImage}
                    alt="player-card"
                    className={`absolute inset-0 object-cover w-full h-full rounded-md`} />
            </div>
            <div>
                <h1 className="truncate text-center text-3xl font-bold font-sans pr-2">{item ? item.name : 'Playlist'}</h1>
            </div>
        </>
    )
}