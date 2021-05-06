import CrudController from "../../common/crud-controller";
import { IDatabase } from "../../db";
import { IPerson } from "../../models/person";
import PersonService from "./person-service";

export default class PersonController extends CrudController<IPerson> {

    constructor(protected database: IDatabase) {
        super(new PersonService(database));
    }
}