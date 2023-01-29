import React from 'react'
import HeaderTitle from '../HeaderTitle';
import CardSong from '../CardSection/CardSong';
import CardPlaylist from '../CardSection/CardPlaylist';
import { Song, Album, Artist, Playlist } from './ContentType';

function ComponentShelf({ title, seeAll = false, items, contentType }) {
    return (
        <section className='mb-4 min-w-full'>
            <HeaderTitle title={title} seeAll={seeAll} font={'semibold'} textDecoration={'underline'} />
            <div className='grid grid-cols-5 gap-x-6'>
                {
                    {
                        [Song]: items.map(item =>
                            <CardSong item={item} key={item.id} />
                        ),
                        [Playlist]: items.map(item =>
                            <CardPlaylist item={item} key={item.id} />
                        )
                    }[contentType]
                }
            </div>

        </section>
    )
}

export default ComponentShelf