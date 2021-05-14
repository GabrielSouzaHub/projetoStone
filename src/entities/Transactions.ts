import {
   Entity, 
   Column,
   PrimaryColumn,
   CreateDateColumn,
   ManyToOne,
   OneToMany,
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

   @Column()
   fundraising_id:string;

   // @JoinColumn({name: "fundraising_id"})
   // @OneToMany(() => Fundraising)
   // fundraising:Fundraising; Ver isso 

   @Column()
   value_donated: number;

   @CreateDateColumn()
   created_at:Date;

   constructor(){
      if(!this.id) this.id = uuid();
  }
}

export {Transactions}