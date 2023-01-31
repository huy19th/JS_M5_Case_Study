import React, {useEffect, useState} from "react";
import CardSection from "../components/Content/CardSection/CardSong";
import {getAllSongs, getAllTrendingSongs, getAllSongsVietNam} from "../services/song";
import {useLocation, useParams} from "react-router-dom";
import {Song} from "../components/Content/HomeContent/ContentType";
const SeeAll = () => {
    const params = useParams();
    let title = params.title
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        switch(title){
            case "Latest Songs" :
                getAllSongs().then(result => {
                    setSongs(result.data)
                });
                break;
            case "Trending" :
                getAllTrendingSongs().then(result => {
                    setSongs(result.data)
                });
                break;
            case "Song VietNam" :
                getAllSongsVietNam().then(result =>{
                    console.log(result);
                    setSongs(result.data)
                })
        }
    }, []);
    return (
        <>
            <section className='mb-4 min-w-full'>
                <h3 className={`text-2xl font-text-white tracking-tight font-sans hover`}>{title}</h3>

                <div className='grid grid-cols-5 gap-x-6'>
                    {songs.map(item => <CardSection item={item} key={item.id}/>)}
                </div>


            </section>
        </>

    )

}
export default SeeAll