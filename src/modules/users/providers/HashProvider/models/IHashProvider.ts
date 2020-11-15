export default interface IHashProvider {
  /** Criamos o 'generateHash' que irá criar um 'hash' a partir de uma string qualquer (payload), retornando uma string do
   * hash gerado. */
  generateHash(payload: string): Promise<string>;
  /** Criamos o 'compareHash' que irá comparar uma string qualquer com algo que já foi criptografado anteriormente (hashed),
   * retornando um boolean dependendo se as 'hashs' bateram ou não
   */
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
