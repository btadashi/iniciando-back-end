/** Criamos a 'interface'  'ICreateUserDTO' passamos quais campos que serão recebidos para a criação do usuário   */
export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}
