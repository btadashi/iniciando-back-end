/** Dizemos que recebe 'user_id' */
export default interface ICreateAppointmentDTO {
  provider_id: string;
  user_id: string;
  date: Date;
}
