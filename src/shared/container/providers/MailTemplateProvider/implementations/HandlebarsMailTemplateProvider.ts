import handlebars from 'handlebars';
/** Importamos o 'fs' de dentro de 'fs', para fazer leitura do nosso arquivo (file) */
import fs from 'fs';

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

/** Ao invés de receber 'template', recebemos agora o 'file' */
class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    /** Dentro da variável 'templateFileContent', fazemos a leitura do arquivo usando o 'fs' do 'Node', usando
     * o 'readFile', passando o arquivo como primeiro parâmetro e o segundo é o 'encoding', no qual passamos 'utf-8' pra
     * que seja posível fazer a leitura de eventuais pontuações */
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    /** Então passamos o 'templateFileContent' dentro do nosso 'handlebars' */
    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
