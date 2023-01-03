import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import SubscriptionDetail from './subscriptionDetail.model';

@Entity()
class Subscription {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;
    @Column({type: 'nvarchar', length: 50})
    name: string;
    @Column({type: 'int', width: 3})
    duration: number;
    @Column({type: 'int'})
    price: number;
    @OneToMany(() => SubscriptionDetail, subscriptionDetail => subscriptionDetail.type)
    subscriptionsDetails: SubscriptionDetail[];
}

export default Subscription;