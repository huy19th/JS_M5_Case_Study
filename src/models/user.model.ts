import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import {Contains, Length} from 'class-validator';
import SubscriptionDetail from './subscriptionDetail.model';
import Playlist from './playlist.model';

@Entity()
class User {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;
    @Column({type: 'nvarchar', unique: true})
    @Contains('@')
    email: string;
    @Column({type: 'nvarchar'})
    @Length(6)
    password: string;
    @OneToOne(() => SubscriptionDetail)
    subscription: SubscriptionDetail;
    @Column({type: 'nvarchar', length: 100})
    image: string;
    @OneToMany(() => Playlist, playlist => playlist.user)
    @JoinColumn()
    playlists: Playlist[];
    @Column({type: 'nvarchar', length: 25})
    role: string;
}

export default User;