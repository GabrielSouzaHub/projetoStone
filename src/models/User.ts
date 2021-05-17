
import {
    Entity, 
    Column, 
    CreateDateColumn, 
    PrimaryColumn,
    BeforeInsert,
    BeforeUpdate,
   
} from 'typeorm';
import bcrypt from 'bcryptjs'

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
    
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 10)
    }
    constructor(){
        if(!this.id) this.id = uuid();
    }
}

export { User }

