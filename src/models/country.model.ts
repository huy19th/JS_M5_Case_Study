import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, ManyToMany , JoinTable, JoinColumn, OneToMany} from 'typeorm';
import Song from './song.model';
import Artist from './artist.model';

@Entity()
class Country {
    @PrimaryGeneratedColumn({type: 'int'})
    readonly id: number;
    @Column({type: 'nvarchar', length: 50})
    name: string;
    @OneToMany(() => Song, song => song.country)
    songs: Song[];
    @OneToMany(() => Artist, artist => artist.country)
    artists: Artist[];
}

export default Country;