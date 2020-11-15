/** Removemos a importação do 'bcryptjs' pois não será utilizada aqui */
import IHashProvider from '../models/IHashProvider';

/** Mudamos o nome para 'FakeHashProvider' */
class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    /** Retornamos a senha sem o 'hash', pois aqui nao testes nao precisamos guardar a senha criptografada */
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    /** Retornamos a comparação de que se a senha é igual a senha criptografada */
    return payload === hashed;
  }
}

export default FakeHashProvider;
