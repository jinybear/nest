import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";


export const typeORMConfig: TypeOrmModuleAsyncOptions = {
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        return {
            type: 'postgres',
            host: configService.get('DB_IP'),
            port: +configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_SCHEMA'),
            entities: [ __dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: false,
        }
    }
};


