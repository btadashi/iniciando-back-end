import ICacheProvider from '../models/ICacheProvider';

/** Criamos a interface 'ICacheData', em que ela vai ser um objeto que a chave vai ser uma string
 * e o valor vai ser uma string também */
interface ICacheData {
  [key: string]: string;
}

/** Mudamos o nome para 'FakeCacheProvider' */
export default class FakeCacheProvider implements ICacheProvider {
  /** Criamos a variável cache, que recebe o tipo 'ICacheData', inicializando como um objeto vazio */
  private cache: ICacheData = {};

  public async save(key: string, value: any): Promise<void> {
    /** Passamos que a 'key' da variável 'cache' recebe uma 'value' e guardamos ela como uma string  */
    this.cache[key] = JSON.stringify(value);
  }

  public async recover<T>(key: string): Promise<T | null> {
    /** Pegamos 'data' de dentro da 'key' de 'cache' */
    const data = this.cache[key];

    if (!data) {
      return null;
    }

    /** Convertemos o JSON no formato 'T' igual ao 'recover' */
    const parsedData = JSON.parse(data) as T;

    return parsedData;
  }

  /** Deletamos o cache pela 'key' */
  public async invalidate(key: string): Promise<void> {
    delete this.cache[key];
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    /** Buscamos todas as chaves do nosso cache e então vamos filtrar as chaves que começam com  'prefix'   */
    const keys = Object.keys(this.cache).filter(key =>
      key.startsWith(`${prefix}:`),
    );

    /** Para cada uma das chaves, deletamos o cache pela chave */
    keys.forEach(key => {
      delete this.cache[key];
    });
  }
}
