// 참고 : https://velog.io/@dev_leewoooo/TypeORM%EC%9D%98-built-in-migration-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
    type: "postgres",
    host: "192.168.1.141",
    port: 5432,
    database: "public",
    username: "root",
    password: "dlsekdtlqdjrdnjs",
    synchronize: false,
  };

  export const OrmConfig = {
    ...typeOrmModuleOptions,
    migrationsTableName: "migrations",
    migrations: ["migrations/*.ts"],
    cli: {
      migrationsDir: "migrations",
    },
  };
  export default OrmConfig;