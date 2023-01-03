import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany , JoinTable} from 'typeorm';
import Album from './album.model';
import Artist from './artist.model';
import Genre from './genre.model';
import Playlist from './playlist.model';

@Entity()
class Song {
    @PrimaryGeneratedColumn({type: 'int'})
    readonly id: number;
    @Column({type: 'nvarchar', length: 100, nullable: false})
    title: string;
    @ManyToOne(() => Album, (album) => album.songs)
    album: Album;
    @ManyToMany(() => Artist)
    artists: Artist[]
    @Column({type: 'date'})
    released: Date;
    @Column({type: 'tinyint', width: 2})
    '#': number;
    @ManyToMany(() => Genre)
    @JoinTable({name: 'genre_detail'})
    genres: Genre[];
    @ManyToMany(() => Playlist, playlist => playlist.songs)
    playlists: Playlist[];
}

export default Song;