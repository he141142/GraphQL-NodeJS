import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {GenresEntity} from "./genres.entity";
import {AuthorEntity} from "../../author/entities/author.entity";
import {CreateBookDTO} from "../dto/book.create.dto";

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


    @Column({
        name: 'available_quantity',
        type: 'integer',
        nullable: true,
    })
    availableQuantity: number = 0;


    @Column({
        name: 'page_total',
        type: 'integer',
        nullable: true,
    })
    totalPage: number = 0;

    @Column({
        name: 'price',
        type: 'double precision',
        nullable: true,
    })
    price: number = 0;

    @Column({
        name: 'sale_price',
        type: 'double precision',
        nullable: true,
    })
    salePrice: number = null;

    @ManyToMany(() => GenresEntity, (genres) => genres.books)
    @JoinTable()
    genres: GenresEntity[];

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