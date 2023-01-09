import { Entity, PrimaryColumn, ManyToMany, JoinTable, Column } from 'typeorm';
import Song from './song.model';

@Entity()
class Genre {
    @PrimaryColumn({ type: 'int' })
    id: number
    @Column({ type: 'nvarchar', length: 100, nullable: false })
    name: string
    @ManyToMany(() => Song)
    songs: Song[]
}

export default Genre;