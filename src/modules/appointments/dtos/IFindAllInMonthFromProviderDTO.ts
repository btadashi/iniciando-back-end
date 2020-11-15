/** Criamos a interface de 'IFindAllInMonthFromProvider, recebendo o 'provider_id, como string,
 * 'month' e 'year', ambos como 'number' */
export default interface IFindAllInMonthFromProviderDTO {
  provider_id: string;
  month: number;
  year: number;
}
