import React, {useEffect, useState} from "react";
import ComponentShelf from '../components/Content/HomeContent/ComponentShelf';
import { items, items2, items3 } from '../static/data/songs';
import {getSong} from "../services/ListSong";
import {getTrendingSong} from "../services/ListSong";

function Main() {
    const [loading, setLoading] = useState(false)
  const [song, setSongs] = useState([]);
  const [trendingSong,setTrendingSong] = useState([]);
  useEffect(() => {
      setLoading(true)
    getSong().then(result => {
      setSongs(result.data)
    })
    getTrendingSong().then(result => {
          setTrendingSong(result.data)
        })
      setLoading(false)
  },[]);
    if(loading) {
        return(
            <div className="row">
                <div className="col-sm-2">
                    <div id="circle_square">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h5>circle_square</h5>
                </div>
            </div>
        )
    }else{
        return (
            <div className='grid gap-y-6 pt-6'>
                <ComponentShelf title={'Latest Songs'} seeAll="/SeeAll" items={song} />
                <ComponentShelf title={'Trending'} seeAll="/SeeAll" items={trendingSong} />
                {/*<ComponentShelf title={'Latest Albums'} seeAll="/SeeAll" items={items3} />*/}
            </div>
        )
    }

}

export default Main