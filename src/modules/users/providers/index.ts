/** Importamos o 'container' de dentro do 'tsyringe' */
import { container } from 'tsyringe';

/** Importamos o 'IHashProvider' */
import IHashProvider from './HashProvider/models/IHashProvider';
/** Importamos o 'BCryptHashProvider' */
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

/** Damos um 'container', usando o método 'registerSingleton', com a tipagem de 'IHashProvider' dizendo que toda vez que
 * houver uma injeção de dependência contendo o nome 'HashProvider', então retornamos uma instãncia de 'BCryptHashProvider' */
container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
