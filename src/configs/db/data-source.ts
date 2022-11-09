import {DataSource} from "typeorm";
import {typeOrmConfig} from "./typeorm.config";
import {POSTGRESQL_CONFIG} from "../../constants/config";

export const myDataSource = new DataSource({
    type: 'postgres',
    host: POSTGRESQL_CONFIG.host,
    port: POSTGRESQL_CONFIG.port,
    username: POSTGRESQL_CONFIG.username,
    password: POSTGRESQL_CONFIG.password,
    database: POSTGRESQL_CONFIG.database,
    entities: [`${__dirname}/../../**/*.entity.{js,ts}`],
    synchronize: true,
    logging: true,
});
