/** Criação da classe 'Error' cotendo as propriedades 'message' e 'statusCode' */
class AppError {
  /** readonly: com isso, não poderemos "settar" a mensagem de erro */
  public readonly message: string;

  public readonly statusCode: number;

  /** Constructor que recebe uma mensagem na forma de string e o statusCode que fixamos um padrão 400. Como settamos um status
   * já na forma de número, não precisamos definir o tipo dela.
   */
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
