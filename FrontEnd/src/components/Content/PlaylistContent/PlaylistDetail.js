import { useAudio } from 'react-use';
import { secondToTime } from '../../BottomBar/Utils';
import { Link } from 'react-router-dom';

function Duration({ songUrl }) {
    try {
        const [audio, state, controls, ref] = useAudio(
            {
                src: songUrl
            }
        );
        return (
            <>
                {audio}
                <span>{secondToTime(state?.duration)}</span>
            </>

        )
    }
    catch (err) {
        console.log(err.message);
        return <h3>Duration</h3>
    }
}

export default function PlaylistDetail({ item }) {

    return (
        <div>
            <div className="grid grid-cols-12 mb-4 font-semibold text-gray-400">
                <div className="col-span-7">
                    <h3>SONG</h3>
                </div>
                <div className="col-span-4">
                    <h3>ALBUM</h3>
                </div>
                <div className="col-span-1">
                    <h3>DURATION</h3>
                </div>
            </div>
            <div className="divide-y">
                {item.songs ? item.songs.map(playlistDetail =>
                    <div className="grid grid-cols-12 py-2 mb-2">
                        <div className="col-span-7 flex">
                            <img src={playlistDetail.song.image} alt="image"
                                className="w-12 inline rounded mr-3"
                            />
                            <div className="flex flex-col">
                                <h3 className="font-medium">{playlistDetail.song.title}</h3>
                                <div>
                                    {playlistDetail.song.artists.map(artist =>
                                        <Link to={`/artist/${artist.id}`}
                                            className="mr-2 font-semibold text-sm text-gray-400 hover:text-base hover:text-gray-300"
                                        >
                                            {artist.name}
                                        </Link>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 content-center">
                            <h3 className="align-middle font-medium text-gray-400">
                                {playlistDetail.song.album.name}
                            </h3>
                        </div>
                        <div className="col-span-1 font-normal text-sm text-gray-400">
                            <Duration songUrl={playlistDetail.song.file} />
                        </div>
                    </div>
                ) : ''}
            </div>

        </div>
    )
}