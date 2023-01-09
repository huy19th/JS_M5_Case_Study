import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import Subscription from './subscription.model';
import User from './user.model';

@Entity()
class SubscriptionDetail {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;
    @OneToOne(() => User)
    @JoinColumn()
    user: User;
    @ManyToOne(() => Subscription, subscription => subscription.subscriptionsDetails)
    @JoinColumn()
    type: Subscription;
    @Column({ type: Date })
    expire: Date;
}

export default SubscriptionDetail;