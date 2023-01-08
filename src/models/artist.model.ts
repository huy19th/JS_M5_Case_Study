import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';
import Album from './album.model';
import Country from './country.model';
import Song from './song.model';

@Entity()
class Artist {
    @PrimaryGeneratedColumn({ type: 'int' })
    readonly id: number;
    @Column({ type: 'nvarchar', length: 100, nullable: false })
    name: string;
    @ManyToMany(() => Song)
    @JoinTable({ name: 'contributing_artists' })
    songs: Song[]
    @ManyToOne(() => Country, country => country.artists)
    country: Country;
    @Column({ type: 'mediumtext', default: null })
    biography: string;
    @Column({ type: 'nvarchar', length: 100, default: null })
    image: string;
    @OneToMany(() => Album, album => album.artist)
    albums: Album[]
}

export default Artist;