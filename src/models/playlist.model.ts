import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany } from 'typeorm';
import Song from './song.model';
import User from './user.model';
import PlaylistDetail from './playlistDetail.model';

@Entity()
class Playlist {
    @PrimaryGeneratedColumn({type: 'int'})
    readonly id: number;
    @Column({type: 'nvarchar', length: 100})
    name: string;
    @ManyToOne(() => User, user => user.playlists)
    @JoinTable()
    user: User;
    @OneToMany(() => PlaylistDetail, playlistDetail => playlistDetail.playlist)
    songs: PlaylistDetail[];
    @Column({type: 'boolean', default: 1})
    private: number;
}

export default Playlist;