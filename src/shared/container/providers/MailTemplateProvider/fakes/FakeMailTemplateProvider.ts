/** Apagamos dentro de nosso 'fake' tudo que estava relacionado ao 'IParseMailTemplateDTO.ts' */

import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    /** Agora, auqi retornamos qualquer coisa, podendo ser até um 'Mail content' */
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
