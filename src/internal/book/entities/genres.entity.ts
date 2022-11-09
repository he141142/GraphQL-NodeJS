import {Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {BookEntity} from "./book.entity";
import {ManyToManySubjectBuilder} from "typeorm/persistence/subject-builder/ManyToManySubjectBuilder";


@Entity({ name: 'genres' })
export class GenresEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: true,
    })
    name: string;

    @Column({
        name: 'order_times',
        type: 'integer',
        nullable: true,
    })
    orderTimes: number = 0;

    @ManyToMany(()=> BookEntity, (book)=> book.genres)
    @JoinTable()
    books: BookEntity[];
}