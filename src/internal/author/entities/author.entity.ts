import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {BookEntity} from "../../book/entities/book.entity";


@Entity({name: 'authors'})
export class AuthorEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'first_name',
        type: 'varchar',
        nullable: true,
    })
    firstName: string;

    @Column({
        name: 'last_name',
        type: 'varchar',
        nullable: true,
    })
    lastName: string;

    @Column({
        name: 'pseudonym',
        type: 'varchar',
        nullable: true,
    })
    pseudonym: string;


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