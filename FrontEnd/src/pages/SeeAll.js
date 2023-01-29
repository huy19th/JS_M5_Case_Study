import React, {useEffect, useState} from "react";
import CardSection from "../components/Content/CardSection/CardSong";
import {getSong, getTrendingSong} from "../services/ListSong";
import {useLocation, useParams} from "react-router-dom";
import {Song} from "../components/Content/HomeContent/ContentType";
const SeeAll = () => {
    const params = useParams();
    let title = params.title
    const [song, setSongs] = useState([]);
    const [trendingSong, setTrendingSong] = useState([]);
    useEffect(() => {
        getSong().then(result => {
            setSongs(result.data)
        })
        getTrendingSong().then(result => {
            setTrendingSong(result.data)
        })
    }, []);
    return (
        <section className='mb-4 min-w-full'>
            <div className='grid grid-cols-5 gap-x-6'>
                {title === "Latest Songs" ? song.map(item => <CardSection item={item} key={item.id}/>) : trendingSong.map(item => <CardSection item={item} key={item.id}/>)}
            </div>

        </section>
    )
}
export default SeeAll