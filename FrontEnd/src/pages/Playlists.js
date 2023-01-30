import { useState, useEffect } from 'react';
import ComponentShelf from '../components/Content/HomeContent/ComponentShelf';
import { getAllPlaylists } from '../services/playlist';
import { Playlist } from '../components/Content/HomeContent/ContentType';

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  
  useEffect(() => {
    getAllPlaylists().then(res => {
      setPlaylists(res);
    });
  }, [])

  return (
    <div>
        <div className='grid gap-y-6 pt-6'>
          <ComponentShelf title={'Playlists'} items={playlists} contentType={Playlist} />
        </div>
    </div>
  )
}

export default Playlists