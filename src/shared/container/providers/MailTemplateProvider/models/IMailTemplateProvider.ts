/** Importamos o 'IParseMailTemplateDTO' */
import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

/** Criamos e exportamos a interface de 'IMailTemplateProvider' */
export default interface IMailTemplateProvider {
  /** Passamos aqui dentro o método 'parse', que vai receber mais de uma informação. Sendo assim, vamos dividi-lo
   * dentro de um 'DTO'. */
  /** Passamos todos os dados de dentro de 'IParseMailTemplateDTO', que retorna uma 'Promise' no formato 'string' */
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
