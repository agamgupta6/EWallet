import { IUser } from './user.model';
import { ITransaction } from './transaction.model';

export interface IFile {
    id?: number;
    user?: IUser;
    transaction?: ITransaction;
}

export class File implements IFile {
    constructor(public id?: number, public user?: IUser, public transaction?: ITransaction) {}
}
