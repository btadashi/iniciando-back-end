# Recuperação de senha

**Requisitos Funcionais (RF)**
São exatamente as funcionalides que teremos dentro da nossa Recuperação de Senha.
Exemplo: o usuário vai poder recuperar sua senha informando seu antigo usuário. 

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;


**Requisitos não funcionais (RNF)**
São elementos que não estão diretamente ligados com a regra de negócio de nossa aplicação.
Exemplo: Podemos estabelecer que o envio de email se dará através da bilbioteca do Node chamada 'Node Mailer'

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);


**Regras de negócios (RN)**
São as regras de negócios propriamente ditas.

- O link enviado por email para resetar senha deve expirar em duas horas;
- O usuário precisa confirmar a nova senha ao resetar sua senha;


# Atualização do perfil

**Requisitos Funcionais (RF)**

- O usuário deve poder atualizar nome, email e senha;


**Regras de negócios (RN)**

- O usuário nao pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**Requisitos Funcionais (RF)**

- O usuário deve poder listar todos os agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;


**Requisitos não funcionais (RNF)**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando o Socket.io;


**Regras de negócios (RN)**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;



# Agendamento de serviços

**Requisitos Funcionais (RF)**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mẽs com pelo menos um horário disponível de um prestador de serviço;
- O usuário deve poder listar os horários disponíveis em um dia específico de um prestador de serviço;
- O usuário deve poder realizar um novo agendamento com um pretador de serviço;


**Requisitos não funcionais (RNF)**

- A listagem de prestadores deve ser armazenada em cache;


**Regras de negócios (RN)**

- Cada agendamento deve durar exatemnte uma hora;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro horário às 8:00 e último às 17:00);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;


