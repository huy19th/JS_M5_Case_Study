import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Song from './song.model';

@Entity()
class Listen {
    @PrimaryGeneratedColumn({ type: 'int' })
    readonly id: number;
    @Column({ type: 'int' })
    month: number;
    @Column({ type: 'int' })
    year: number;
    @Column({ type: 'int' })
    count: number;
    @ManyToOne(() => Song, song => song.listens)
    song: Song
}

export default Listen;