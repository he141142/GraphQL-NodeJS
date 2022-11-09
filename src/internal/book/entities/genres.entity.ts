import {Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {BookEntity} from "./book.entity";
import {ManyToManySubjectBuilder} from "typeorm/persistence/subject-builder/ManyToManySubjectBuilder";
import {Field, ObjectType} from "@nestjs/graphql";


@ObjectType({description:"genres"})
@Entity({ name: 'genres' })
export class GenresEntity{
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({
        name: 'name',
        type: 'varchar',
        nullable: true,
    })
    name: string;

    @Field()
    @Column({
        name: 'order_times',
        type: 'integer',
        nullable: true,
    })
    orderTimes: number = 0;

    @Field(()=>[BookEntity],{ nullable: true })
    @ManyToMany(()=> BookEntity, (book)=> book.genres)
    @JoinTable()
    books: BookEntity[];
}