export default interface IStorageProvider {
  /** Criamos o 'saveFile' que recebe o caminho do arquivo que queremos salvar, em formato 'string' e devolve uma 'Promise'
   * com o caminho completo de onde o arquivo foi salvo */
  saveFile(file: string): Promise<string>;
  /** Criamos o 'deleteFile' que recebe o caminho do arquivo que queremos deletar, em formato 'string' e retorna um 'Promise'
   * 'void', ou seja, não retorna nada, pois só queremos deletar */
  deleteFile(file: string): Promise<void>;
}
