import {
   Entity, 
   Column,
   PrimaryColumn
} from 'typeorm';

@Entity("transactions")
class Transactions {
   @PrimaryColumn()
   user_id:string;

   @PrimaryColumn()
   fundraising_id:string;

   @Column()
   value_donated: number;
}

export {Transactions}