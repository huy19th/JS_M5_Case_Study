import {useEffect, useState} from "react";
import ComponentShelf from '../components/Content/HomeContent/ComponentShelf';
import { items, items2, items3 } from '../static/data/songs';
import {getSong} from "../services/ListSong";

function Main() {

  const [song, setSongs] = useState([]);
  useEffect(() => {
    getSong().then(result => {
      setSongs(result.data)
    })
  }, []);

  return (
    <div className='grid gap-y-6 pt-6'>
      <ComponentShelf title={'Latest Songs'} seeAll="/SeeAll" items={song} />
      {/* <ComponentShelf title={'Trending'} seeAll="/SeeAll" items={items2} /> */}
      {/* <ComponentShelf title={'Most Listened'} seeAll="/SeeAll" items={items3} /> */}
    </div>
  )
}

export default Main