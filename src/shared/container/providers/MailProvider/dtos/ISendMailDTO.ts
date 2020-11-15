/** Importamos o 'IParseMailTemplateDTO' */
import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

/** Para passar os dados dentro d 'to', criamos então uma interface para dizer os dados do contato do email o qual
 * estaremos enviando */
interface IMailContact {
  name: string;
  email: string;
}

/** Criamos a interface IsendMailDTO, onde listamos quais dados serão necessário para o envio do email */
/** Deixamos o 'from' como opcional (?), pois, mais pra frente iremos configurar um email padrão como remetente
 * de nossas mensagens. */
/** Dentro de 'templateData', esperamos receber as mesmas coisas que temos dentro do nosso 'IParseMailTemplateDTO,
 * que são as nossas 'templates' e as 'variables'
 */
export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
