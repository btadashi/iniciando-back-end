import { injectable, inject } from 'tsyringe';
/** Importamos 'isAfter' e 'addHours' de dentro de 'date-fns'.  */
import { isAfter, addHours } from 'date-fns';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

// import User from '../infra/typeorm/entities/User';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User does not exists');
    }
    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    /** Depois de serem feitos todas as verificações, pegamos data de criação do nosso 'token', atravẽs do 'tokenCreatedAt',
     * usando o método 'created_at' de 'userToken' */
    const tokenCreatedAt = userToken.created_at;
    /** Criamos a variável 'compareDate', pegando o tokenCreatedAt e adicionando mais 2 horas nele */
    const compareDate = addHours(tokenCreatedAt, 2);

    /** Verificamos se a data atual (Date.now) for posterior ao 'compareDate'. Se for verdadeira, disparamos um erro */
    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired');
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
