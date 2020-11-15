import { getRepository, Repository } from 'typeorm';

/** Importamos nossa interface 'IUserTokensRepository' */
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

/** Importamos as entidades de 'UserToken' */
import UserToken from '../entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  /** Nosso repositório terá as mesmas entidades de 'UserToken' */
  private ormRepository: Repository<UserToken>;

  constructor() {
    /** Passamos UserToken dentro do método 'getRepository' */
    this.ormRepository = getRepository(UserToken);
  }

  /** Criamos o método 'findByToken', que recebe um token e retorna uma Promise de UserToken ou undefined,
   * caso não encontrar */
  public async findByToken(token: string): Promise<UserToken | undefined> {
    /** Usamos o método findOne, passando "onde" token  */
    const userToken = await this.ormRepository.findOne({
      where: { token },
    });

    /** Retornamos 'userToken' */
    return userToken;
  }

  /** Criamos o método 'generate', que recebe um user_id e retorna uma 'Promise' de 'UserToken' */
  public async generate(user_id: string): Promise<UserToken> {
    /** Criamos userToken para a criação do token através do 'user_id' */
    const userToken = this.ormRepository.create({ user_id });

    /** Salvamos nosso token dentro do repositório */
    await this.ormRepository.save(userToken);

    /** Retornamos o token criado */
    return userToken;
  }
}

export default UserTokensRepository;
