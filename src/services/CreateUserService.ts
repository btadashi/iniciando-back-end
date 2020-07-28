import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs'; /** Importamos 'hash' de dentro de bcryptjs */

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email address alredy used.');
    }

    /** Variável que carrega a senha criptografada. Hash recebe como parâmetro o password e o tamanho do 'salt' que srá utilizado, no nosso caso 8 */
    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
