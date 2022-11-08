import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'books' })
export class BookEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        name: 'title',
        type: 'varchar',
        nullable: true,
    })
    title: string;


}