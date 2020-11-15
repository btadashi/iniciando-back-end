/** Importamos op 'ISendMailDTO' */
import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  /** Passamos dentro de 'sendMail' nossos dados (datas), onde ficarão todas as nossas informações
   * disponíveis, de 'ISendMailDTO' */
  sendMail(data: ISendMailDTO): Promise<void>;
}
