import { Repository, EntityRepository } from "typeorm";
import { Fundraising } from "../entities/Fundraising";

@EntityRepository(Fundraising)
class FundraisingRepository extends Repository<Fundraising> {}

export { FundraisingRepository }