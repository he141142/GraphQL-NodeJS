import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {GenresEntity} from "./genres.entity";
import {AuthorEntity} from "../../author/entities/author.entity";
import {CreateBookDTO} from "../dto/book.create.dto";
import {Field, ObjectType} from "@nestjs/graphql";
import {CustomUuidScalar} from "../../utils/uuid-scalar";

@ObjectType({})
@Entity({ name: 'books' })
export class BookEntity{
    @Field(()=>CustomUuidScalar)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field({name: "title"})
    @Column({
        name: 'title',
        type: 'varchar',
        nullable: true,
    })
    title: string;


    @Field({name : "availableQuantity"})
    @Column({
        name: 'available_quantity',
        type: 'integer',
        nullable: true,
    })
    availableQuantity: number = 0;

    @Field({name : "totalPage"})
    @Column({
        name: 'page_total',
        type: 'integer',
        nullable: true,
    })
    totalPage: number = 0;

    @Field({name : "price"})
    @Column({
        name: 'price',
        type: 'double precision',
        nullable: true,
    })
    price: number = 0;

    @Field({name : "salePrice"})
    @Column({
        name: 'sale_price',
        type: 'double precision',
        nullable: true,
    })
    salePrice: number = null;

    @Field(() => [GenresEntity], { nullable: true })
    @ManyToMany(() => GenresEntity, (genres) => genres.books)
    @JoinTable({
        name:"book_genres"
    })
    genres: GenresEntity[];

    @Field(() => AuthorEntity, { nullable: true })
    @ManyToOne(() => AuthorEntity, (author) => author.books)
    author: AuthorEntity;

    setAuthor = (author: AuthorEntity) => {
        this.author = author;
        return this;
    };



    static builder =  class{
        author: AuthorEntity = null;

        setAuthor = (author: AuthorEntity) => {
            this.author = author;
            return this;
        }

        buildBookEntity = (dto: CreateBookDTO) => {
            let book = new BookEntity();
            book.salePrice = dto.salePrice;
            book.price = dto.price;
            book.title = dto.title;
            book.availableQuantity = dto.availableQuantity;
            book.totalPage = dto.totalPage;
            console.log(this.author)
            book.author = this.author;
            return book;
        }
    }

}