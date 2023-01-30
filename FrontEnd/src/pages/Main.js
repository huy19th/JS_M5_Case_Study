import React, {useEffect, useState} from "react";
import ComponentShelf from '../components/Content/HomeContent/ComponentShelf';
import {items, items2, items3} from '../static/data/songs';
import {getSong} from "../services/ListSong";
import {getTrendingSong} from "../services/ListSong";
import './MainLoading.css'

function Main() {
    const [loading, setLoading] = useState(true)
    const [song, setSongs] = useState([]);
    const [trendingSong, setTrendingSong] = useState([]);
    useEffect(() => {
        getSong().then(result => {
            setSongs(result.data)
        }).then(() => {
            getTrendingSong().then(result => {
                setTrendingSong(result.data)
                setLoading(false)
            })
        })
    }, []);


    return (
        <>
            {loading === false &&
                <div className='grid gap-y-6 pt-6'>
                    <ComponentShelf title={'Latest Songs'} seeAll="/SeeAll" items={song}/>
                    <ComponentShelf title={'Trending'} seeAll="/SeeAll" items={trendingSong}/>
                    {/*<ComponentShelf title={'Latest Albums'} seeAll="/SeeAll" items={items3} />*/}
                </div>
            }

            {
                loading === true &&
                <div className="col-sm-2">
                    <div id="bars5">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            }
        </>
    )


}

export default Main