import {
   Entity, 
   Column, 
   CreateDateColumn, 
   PrimaryColumn
} from 'typeorm';

import { v4 as uuid } from 'uuid';
@Entity("fundraising")
class Fundraising {
   @PrimaryColumn()
   id: string;

   @Column()
   fundraising_name: string;

   @CreateDateColumn()
   created_at: Date;

   @Column()
   description: string;

   @Column()
   image:string;

   @Column()
   video: string;

   @Column()
   value_donated:number;

   @Column()
   goal_meta:number;
    
   @Column()
   validity:Date;

   constructor(){
      if(!this.id) this.id = uuid();
  }
}

export {Fundraising}