import CardMenu from '../CardContent/CardMenu';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from '../../../icons/Icons'
import { setCurrent } from '../../../store/Player'


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
            to={window.location.pathname}
            className="bg-footer p-4 rounded-md flex-1 hover:bg-active group"
        >
            <div>
                <div className='pt-[100%] mb-4 relative'>
                    <img src={item.image} alt="player-card"
                        className={`absolute inset-0 object-cover w-full h-full ${roundedStyle(item.type)}`} />
                    <button
                        onClick={updateCurrent}
                        className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center group-hover:flex group-focus:flex ${isCurrentPlaying ? 'flex' : 'hidden'}`}>
                        <Icon name={isCurrentPlaying ? "pause" : "play"} size={16} />
                    </button>
                </div>
                <div>
                    <div className="grid grid-cols-12 gap-1">
                        <div className="col-span-11">
                            <h5 className='truncate text-base font-bold font-sans pr-2'>
                                {item.title}
                            </h5>
                        </div>
                        <div className={`cols-span-1 group-hover:flex group-focus:flex ${isCurrentPlaying ? 'flex' : 'hidden'}`}>
                            <CardMenu song={item}/>
                        </div>
                    </div>

                    {item.artists.map((element, index) => (
                        <p className='line-clamp-2 overflow-hidden text-ellipsis whitespace-normal text-link text-sm font-medium font-sans mt-1'
                            key={index}>{element.name}</p>
                    ))}

                </div>
            </div>
        </Link>
    )





}

export default CardSection
