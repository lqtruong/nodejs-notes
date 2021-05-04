import { IDatabase } from '../db';

export default class Repository<T> {

  constructor(private database: IDatabase) { }

  public save(data: T): Promise<T> {
    return new Promise((resolve, reject) => {
    });
  }

  public getById(_id: string): Promise<any> {
    return new Promise((resolve, reject) => {
    });
  }

  public getAll(): Promise<any[]> {
    return Promise.resolve(this.database.taskModel.find());
    // return new Promise((resolve, reject) => {
    //   resolve([new Task('solve problem 1', {
    //     _id: 'person-id',
    //     name: 'truong'
    //   })]);
    // });
  }

  public updateById(_id: string, data: T): Promise<T> {
    return new Promise((resolve, reject) => {
    });
  }

  public deleteById(_id: string): Promise<string> {
    return new Promise((resolve, reject) => {
    });
  }
}