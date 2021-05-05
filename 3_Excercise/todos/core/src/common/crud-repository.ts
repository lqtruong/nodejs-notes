export default interface CrudRepository<T> {

  save(data: T): Promise<T>;

  getById(_id: string): Promise<T>;

  getAll(): Promise<T[]>;

  updateById(_id: string, data: T): Promise<T>;

  deleteById(_id: string): Promise<T>;

}