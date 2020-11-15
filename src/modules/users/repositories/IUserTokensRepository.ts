import UserToken from '../infra/typeorm/entities/UserToken';

/** Passamos o método 'findByToken' para que seja possível buscar um usuário por um 'token' */
export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
