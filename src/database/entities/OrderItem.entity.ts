import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Order, Product, ReturnItem } from './index';

@Entity({ name: 'order_items' })
export class OrderItem extends CustomBaseEntity {
    @Column()
    order_id!: number;

    @Column()
    product_id!: number;

    @Column()
    quantity!: number;

    @Column('decimal')
    price!: number;

    @Column('jsonb', { nullable: true })
    meta!: any;

    @ManyToOne(() => Order, order => order.orderItems)
    order!: Relation<Order>;

    @ManyToOne(() => Product, product => product.orderItems)
    product!: Relation<Product>;

    @OneToMany(() => ReturnItem, returnItem => returnItem.orderItem)
    returnItems!: Relation<ReturnItem>[];
}