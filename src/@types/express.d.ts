/** namespace Express: pois queremos sobeescrever uma tipagem de dentro 'express' */
declare namespace Express {
  /** Sobreescrever a exportação do 'Request' que já existe de dentro do 'express'
   * O que vai acontecer é que o conteúdo que será escrito aqui dentro será anexado ao conteúdo
   * que existe dentro do 'Request' do 'express'.
   */
  export interface Request {
    user: {
      id: string;
    };
  }
}
