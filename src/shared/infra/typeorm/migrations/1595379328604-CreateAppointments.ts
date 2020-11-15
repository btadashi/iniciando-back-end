import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateAppointments1595379328604 implements MigrationInterface {
  /**No método up colocamos o que queremos que seja feito no banco de dados, quando essa migration for executada  */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [{
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'provider',
          type: 'varchar',
        },
        {
          name: 'date',
          type: 'timestamp with time zone',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
        ],
      })
    );
  }
  /**O método down é utilizado para fallback, como, por exemplo, se acontecer algum problema e precisamos voltar atrás dessa migration
   * Ou seja, é um método para desfazer (deletar) o que foi feito no método up
  */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }

}
