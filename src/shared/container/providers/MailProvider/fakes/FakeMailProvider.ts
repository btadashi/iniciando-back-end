import IMailProvider from '../models/IMailProvider';
/** Importamos o 'ISendMailDTO' */
import ISendMailDTO from '../dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  /** Agora, falamos que o tipo de messages será a mesma da interface de 'ISendMailDTO' */
  private messages: ISendMailDTO[] = [];

  /** Recebemos de dentro de sendMail a mensagem inteira de 'ISendMailDTO' */
  public async sendMail(message: ISendMailDTO): Promise<void> {
    /** Jogamos a mensagem inteira para dentro da arrau de 'messages' */
    this.messages.push(message);
  }
}
