import {Injectable} from "@nestjs/common";
import {BookEntity} from "./entities/book.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateBookDTO} from "./dto/book.create.dto";
import {AuthorService} from "../author/author.service";

@Injectable()
export class BookService{

    constructor(@InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    private authorService: AuthorService) {
    }

    createBook = async (dto: CreateBookDTO) => {
        let author = await this.authorService.findAuthorByPseudonym(dto.author);
        let bookEntity:BookEntity = new BookEntity.builder()
            .setAuthor(author)
            .buildBookEntity(dto);
        return this.bookRepository.save(bookEntity)
    }

    deleteBook  =async (id: string) => {
        await this.bookRepository.createQueryBuilder('books')
            .delete()
            .from(BookEntity)
            .where("id = :id", { id: id })
            .execute();
        return "Delete book successfully"
    }

}