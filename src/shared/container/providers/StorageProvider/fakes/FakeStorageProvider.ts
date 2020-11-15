/** Removemos as impportações de 'fs', 'path', 'uploadConfig' */
import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  /** Criamos uma varável chamada 'storage', armazenandd um array de string, iniciando como vazio */
  private storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    /** Passamos o 'this.storage', usando o método 'push' para jogar o 'file' dentro da 'array' */
    this.storage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    /** Percorremos dentro do nosso 'array' de arquivos que foram enviados para dentro de nossa aplicação, vamos procurar aquele
     * que tenha o mesmo nome que o aquivo que estamos recebendo como parãmetro, pois precisamos deletá-lo de dentro de
     * nossa array */
    const findIndex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    /** Removemos a informação de dentro do 'array', usando o mẽtodo 'splice', passando dentro dele o 'findIndex' uma unidade, uma
     * informação a partir da posição do 'findIndex' */
    this.storage.splice(findIndex, 1);

    /** Removemos o 'await fs.promises.unlink(filePath)' */
  }
}

export default FakeStorageProvider;
