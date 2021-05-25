import {
   Entity, 
   Column,
   PrimaryColumn,
   CreateDateColumn,
   ManyToOne,
   JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Fundraising } from './Fundraising';
import { User } from './User';
@Entity("transactions")
class Transactions {
   @PrimaryColumn()
   id:string;

   @JoinColumn({name:"user_id"})
   @ManyToOne(() => User)
   user:User;

   @Column()
   user_id:string;

   @JoinColumn({name: "fundraising_id"})
   @ManyToOne(() => Fundraising)
   fundraising:Fundraising;

   @Column()
   fundraising_id:string;

   @Column()
   value_donated: number;

   @CreateDateColumn()
   created_at:Date;

   constructor(){
      if(!this.id) this.id = uuid();
  }
}

export {Transactions}