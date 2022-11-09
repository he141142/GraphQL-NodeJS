import {BadRequestException, Injectable, OnModuleInit} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {AuthorEntity} from "./entities/author.entity";
import {Repository} from "typeorm";
import {CreateAuthorDTO} from "./dto/author.create.dto";
import {defaultAuthor} from "../../constants/data";

@Injectable()
export class AuthorService implements OnModuleInit {
    InitMode: boolean = false;

    constructor(
        @InjectRepository(AuthorEntity)
        private readonly authorRepository: Repository<AuthorEntity>
    ) {
    }

    onModuleInit = async () => {
        const authorCount = await this.authorRepository.count();
        if (authorCount <= 0) {
            await this.createAuthor(defaultAuthor);
        }
    }

    createAuthor = async (dto: CreateAuthorDTO) => {
        try {
            await this.authorRepository.save(AuthorEntity
                .buildAuthor(dto.pseudonym, dto.firstName, dto.lastName));
            return "Create Author Successfully"
        }catch (e) {
            throw new BadRequestException("Error While create Author");
        }
    }

    findAuthorByPseudonym = async (pseudonym: string) => {
        let auth = await this.authorRepository.findOneBy({
            pseudonym: pseudonym
        });
        if (!auth) return this.getDefaultAuthor();
        return auth;
    }

    getDefaultAuthor = async () => {
        console.log(defaultAuthor.pseudonym)
        return this.authorRepository.findOneBy({
            pseudonym: defaultAuthor.pseudonym
        })
    }

}