import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import SubscriptionDetail from './subscriptionDetail.model';

@Entity()
class Subscription {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;
    @Column({ type: 'nvarchar', length: 50, nullable: false, unique: true })
    name: string;
    @Column({ type: 'int', width: 3, nullable: false })
    duration: number;
    @Column({ type: 'int', nullable: false })
    price: number;
    @OneToMany(() => SubscriptionDetail, subscriptionDetail => subscriptionDetail.type)
    subscriptionsDetails: SubscriptionDetail[];
    @Column({ type: 'boolean', default: 1 })
    active: number;
}

export default Subscription;