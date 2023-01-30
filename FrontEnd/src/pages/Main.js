import React, { useEffect, useState } from "react";
import ComponentShelf from '../components/Content/HomeContent/ComponentShelf';
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
                    <ComponentShelf title={'Latest Songs'} seeAll="/SeeAll" items={song} contentType={'song'}/>
                    <ComponentShelf title={'Trending'} seeAll="/SeeAll" items={trendingSong} contentType={'song'}/>
                </div>
            }

            {loading === true &&
                <div className="row">
                    <div className="col-sm-2">
                        <div id="bars5">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            }
            </>
    )
}



export default Main