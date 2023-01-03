import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import Song from './song.model';
import User from './user.model';

@Entity()
class Playlist {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;
    @Column({type: 'nvarchar', length: 100})
    name: string;
    @ManyToOne(() => User, user => user.playlists)
    @JoinTable()
    user: User;
    @ManyToMany(() => Song, song => song.playlists)
    @JoinTable({name: 'playlist_detail'})
    songs: Song[];
}

export default Playlist;