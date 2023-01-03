import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany , JoinTable, OneToMany} from 'typeorm';
import Album from './album.model';
import Song from './song.model';

@Entity()
class Artist {
    @PrimaryGeneratedColumn({type: 'int'})
    readonly id: number;
    @Column({type: 'nvarchar', length: 100, nullable: false})
    name: string;
    @ManyToMany(() => Song)
    @JoinTable({name: 'contributing_artists'})
    songs: Song[]
    @Column({type: 'mediumtext'})
    biography: string;
    @Column({type: 'nvarchar', length: 100})
    image: string;
    @OneToMany(() => Album, album => album.artist)
    albums: Album[]
}

export default Artist;