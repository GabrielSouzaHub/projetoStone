import {
    Entity, 
    Column, 
    CreateDateColumn, 
    PrimaryColumn
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    profile_image: string;

    @Column()
    coins: number;

    @Column()
    birth: Date;

    @Column()
    phone_number: number;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    cep: string;

    @Column()
    street: string;

    @Column()
    state:string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @Column()
    enabled:boolean;
    
    constructor(){
        if(!this.id) this.id = uuid();
    }
}

export { User }