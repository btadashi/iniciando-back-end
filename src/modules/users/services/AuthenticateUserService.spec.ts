import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    /** Tiramos esse service, pois vamos passar a criar o usuário com o 'fakeUsersRepository' */
    // createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    /** Passamos a criar o usuário através de  'fakeUsersRepository' */
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'Johndoe@example.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'Johndoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'Johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    /** Passamos a criar o usuário através de  'fakeUsersRepository' */
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'Johndoe@example.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'Johndoe@example.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
