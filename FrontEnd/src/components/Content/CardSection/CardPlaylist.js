import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from '../../../icons/Icons'
import { setCurrent } from '../../../store/Player'
import { playlistImage } from '../../../static/image'


function CardSection({ item }) {
    const dispatch = useDispatch();
    const { current, playing, controls } = useSelector((state) => state.player)

    const isCurrentPlaying = (current?.id === item.id && playing);

    const roundedStyle = (item) => {
        switch (item) {
            case "artist":
                return 'rounded-full';

            case "podcast":
                return 'rounded-xl';

            default:
                return 'rounded-md';
        }
    }


    const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing) {
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }
    }

    return (
        <Link
            key={item.id}
            to={`/playlists/${item.id}`}
            className="bg-footer p-4 rounded-md flex-1 hover:bg-active group"
        >
            <div>
                <div className='pt-[100%] mb-4 relative'>
                    <img src={item.songs[0]? item.songs[0].song.image : playlistImage} alt="player-card"
                        className={`absolute inset-0 object-cover w-full h-full ${roundedStyle(item.type)}`} />
                    <button
                        onClick={updateCurrent}
                        className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center group-hover:flex group-focus:flex ${isCurrentPlaying ? 'flex' : 'hidden'}`}>
                        <Icon name={isCurrentPlaying ? "pause" : "play"} size={16} />
                    </button>
                </div>
                <div>
                    <h5 className='truncate text-base font-bold font-sans pr-2'>
                        {item.name}
                    </h5>
                </div>
            </div>
        </Link>
    )

}

export default CardSection
