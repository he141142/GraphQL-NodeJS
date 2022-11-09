import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {BookEntity} from "../../book/entities/book.entity";
import {Field, ObjectType} from "@nestjs/graphql";


@ObjectType({description:"authors"})
@Entity({name: 'authors'})
export class AuthorEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({
        name: 'first_name',
        type: 'varchar',
        nullable: true,
    })
    firstName: string;

    @Field()
    @Column({
        name: 'last_name',
        type: 'varchar',
        nullable: true,
    })
    lastName: string;

    @Field()
    @Column({
        name: 'pseudonym',
        type: 'varchar',
        nullable: true,
    })
    pseudonym: string;


    @Field(()=>[BookEntity],{nullable:true})
    @OneToMany(() => BookEntity, book => book.author)
    public books!: BookEntity[];

    public static buildAuthor = (
        pseudonym,
        firstName,
        lastName
    ): AuthorEntity => {
        let author =  new AuthorEntity();
        author.firstName = firstName;
        author.lastName = lastName;
        author.pseudonym = pseudonym;
        return author;
    }
}