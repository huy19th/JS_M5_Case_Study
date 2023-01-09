import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import Album from './album.model';
import Artist from './artist.model';
import Genre from './genre.model';
import Country from './country.model';
import PlaylistDetail from './playlistDetail.model';
import Listen from './listen.models';

@Entity()
class Song {
    @PrimaryGeneratedColumn({ type: 'int' })
    readonly id: number;
    @Column({ type: 'nvarchar', length: 100, nullable: false })
    title: string;
    @ManyToOne(() => Album, (album) => album.songs)
    album: Album;
    @ManyToMany(() => Artist)
    artists: Artist[]
    @Column({ type: 'date' })
    released: Date;
    @Column({ type: 'tinyint', width: 2, default: null })
    '#': number;
    @ManyToMany(() => Genre)
    @JoinTable({ name: 'genre_detail' })
    genres: Genre[];
    @OneToMany(() => PlaylistDetail, playlistDetail => playlistDetail.song)
    playlists: PlaylistDetail[];
    @Column({ type: 'nvarchar', length: 500, default: null })
    image: string;
    @Column({ type: 'nvarchar', length: 500, nullable: false })
    file: string;
    @ManyToOne(() => Country, country => country.songs)
    country: Country;
    @OneToMany(() => Listen, listen => listen.song)
    listens: Listen[];
    @Column({ type: 'boolean', default: 1 })
    active: number;
}

export default Song;