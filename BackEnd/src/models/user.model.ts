import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Contains, Length } from "class-validator";
import SubscriptionDetail from "./subscriptionDetail.model";
import Playlist from "./playlist.model";

@Entity()
class User {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;
    @Column({ type: 'nvarchar', unique: true, nullable: false })
    @Contains('@')
    email: string;
    @Column({ type: 'nvarchar' })
    @Length(6)
    password: string;
    @Column({ type: 'nvarchar', length: 100, default: null })
    name: string;
    @OneToOne(() => SubscriptionDetail)
    subscription: SubscriptionDetail;
    @Column({ type: 'nvarchar', length: 500, default: null })
    image: string;
    @OneToMany(() => Playlist, playlist => playlist.user)
    @JoinColumn()
    playlists: Playlist[];
    @Column({ type: 'nvarchar', length: 25, default: 'user' })
    role: string;
}

export default User;