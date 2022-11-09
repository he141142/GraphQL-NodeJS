import {Injectable} from "@nestjs/common";
import {BookEntity} from "./entities/book.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { DataSource, Repository} from "typeorm";
import {CreateBookDTO} from "./dto/book.create.dto";
import {AuthorService} from "../author/author.service";
import {GenresEntity} from "./entities/genres.entity";
import {myDataSource} from "../../configs/db/data-source";
import {GenresDefault} from "../../constants/data";

@Injectable()
export class BookService {
    private dataSource: DataSource;

    constructor(@InjectRepository(BookEntity)
                private readonly bookRepository: Repository<BookEntity>,
                @InjectRepository(GenresEntity)
                private readonly genresRepository: Repository<GenresEntity>,
                private authorService: AuthorService) {
        this.dataSource = myDataSource;
    }

    createBook = async (dto: CreateBookDTO) => {
        let author = await this.authorService.findAuthorByPseudonym(dto.author);
        let bookEntity: BookEntity = new BookEntity.builder()
            .setAuthor(author)
            .buildBookEntity(dto);
        return this.bookRepository.save(bookEntity)
    }

    deleteBook = async (id: string) => {
        await this.bookRepository.createQueryBuilder('books')
            .delete()
            .from(BookEntity)
            .where("id = :id", {id: id})
            .execute();
        return "Delete book successfully"
    }




    loadDefaultGenres = async () => {
        try {
          await this.genresRepository.save(GenresDefault);
            // commit transaction now:
            // await queryRunner.commitTransaction()
        } catch (err) {
            // await queryRunner.rollbackTransaction()
        } finally {
            // await queryRunner.release()
        }
    }

    getBookById = async (id: string): Promise<BookEntity> => {
        return this.bookRepository.findOneBy({
            id
        });
    }


}