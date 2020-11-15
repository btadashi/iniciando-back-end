/** Importamos também o 'Generated' de dentro do 'typeorm' */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
} from 'typeorm';

/** Mudamos o nome da tabela para 'user_tokens' */
@Entity('user_tokens')
class UserToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** Criamos uma coluna com 'uuid', gerado pelo 'generated' */
  @Column()
  @Generated('uuid')
  token: string;

  /** Criamos uma referência dizendo a qual usuário esse token pertence  */
  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserToken;
