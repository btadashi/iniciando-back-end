/** Importamos 'Table' de dentro do 'typeorm' */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

/** Adicionamos 'defaut' */
export default class CreateUserTokens1603635979441
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /** Criamos uma nova tabela no nosso banco que vai ser nossa tabela de token */
    /** Passamos as colunas e as chaves estrangeiras (foreignKeys) */
    /** Nas colunas, criamos primeiro nossa 'id', que será gerado de forma automática */
    /** Nas colunas, criamos o 'token', também um 'uuid', nao sendo uma chave primária e será gerado de forma automática */
    /** Nas colunas, criamos o 'user_id', do tipo 'uuid', que depois será relacionado com o usuário */
    /** Nas colunas criamos os 'created_at' e 'updated_at' */
    /** Dentro da chave entrageira criamos o 'TokenUser' que irá relacionar o 'user_id' com o 'id' do 'user' de dentro
     * da tabela 'users' */
    /** Dentro da chave estrangeira, passamos o onDelete: CASCADE, ou seja, o que deve acontecer com os tokens dos usuários
     * deletados. No nosso caso, CASCADE, deleta oos tokens também junto com o usuário deletado. */
    /** Dentro da chave entrangeira, passamos onUpdate: CASCADE, o que deve acontecer caso um usuário tiver
     * seu 'id' alterado, o que deverá acontecer. No caso, CASCADE, ou seja, se houver alteração do 'id' do usuário, tal
     * alteração também deve refletir a alteração da 'id' dos 'tokens'. */

    await queryRunner.createTable(
      new Table({
        name: 'user_tokens',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'token',
            type: 'uuid',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
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
        foreignKeys: [
          {
            name: 'TokenUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    /** No nosso método 'down', desfazemos o que foi feito no método 'up' */
    /** Então, dropamos a tabela */
    await queryRunner.dropTable('user_tokens');
  }
}
