export default interface Repository<T> {

  save(data: T): Promise<T>;

  getById(_id: string): Promise<T | null>;

  getAll(): Promise<T[]>;

  updateById(_id: string, data: T): Promise<T | null>;

  deleteById(_id: string): Promise<T | null>;

}