import { Column, Entity, PrimaryColumn } from "typeorm";
import { Authority } from "./common/enums";


@Entity()
export class User {
    @PrimaryColumn()
    id: string

    @Column()
    password: string

    @Column({ type: 'enum', name: 'authority', enum: Authority, default: Authority.ANYONE})
    authority: Authority

    @Column()
    refreshtoken: string

    @Column({ default: false})
    islocked: boolean

    @Column({ default: 0})
    failcount: number
}
