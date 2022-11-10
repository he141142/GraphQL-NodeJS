import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class DeleteResponse {
    @Field()
    location: string;
    @Field()
    message: string;
}

export enum UPDATE_STATUS {
    SUCCESS,
    FAILED
}

@ObjectType()
export class BookDeleteResponse extends DeleteResponse {
    @Field()
    title: string
    setTitle = (title: string) => {
        this.title = title;
        return this;
    }

    static buildResponse = (status: UPDATE_STATUS):BookDeleteResponse => {
        let res: BookDeleteResponse = new BookDeleteResponse();
        res.location = "books";
        res.message = status === UPDATE_STATUS.SUCCESS ? "delete book successfully" :
            "delete book failed";
        return  res;
    }
}