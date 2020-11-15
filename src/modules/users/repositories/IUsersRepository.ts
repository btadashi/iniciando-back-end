import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
/** Importamos 'IFindAllProvidersDTO' */
import IFindAllProvidersDTO from '../dtos/IFindAllProvidersDTO';

export default interface IUsersRepository {
  /** Passaremos um objeto como um parâmetro de 'findAllProviders'. Para isso, vamos criar um 'DTO' */
  /** Passaomos as informações (data) como sendo 'IFindAllProvidersDTO'  */
  findAllProviders(data: IFindAllProvidersDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
