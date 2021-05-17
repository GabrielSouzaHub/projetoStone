import { Repository, EntityRepository } from "typeorm";
import { Fundraising } from "../models/Fundraising";

@EntityRepository(Fundraising)
class FundraisingRepository extends Repository<Fundraising> {}

export { FundraisingRepository }