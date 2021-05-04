import { ITask } from "../models/task";

export default class Repository<T> {

  public save(data: T): Promise<T> {
    return new Promise((resolve, reject) => {
    });
  }

  public getById(_id: string): Promise<any> {
    return new Promise((resolve, reject) => {
    });
  }

  public getAll(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      resolve([
        {
          name: 'solve problem 1',
          desc: 'math problem',
          tags: [],
          person: {
            _id: 'person-id',
            name: 'truong'
          },
          created: new Date(),
          modified: new Date()
        }
      ]);
    });
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