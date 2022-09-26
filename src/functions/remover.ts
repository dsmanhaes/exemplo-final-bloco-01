import { Produto } from '../classes/Produto';
import { apresentar } from './apresentar';
import { userInput } from './userInput';

function remover (estoque: Produto[]) {
  apresentar(estoque);
  let id: number;
  do {
    id = Number(userInput('Digite o id do item que deseja remover: '));
  } while (isNaN(id));
  estoque.splice(id - 1, 1);
}

export { remover };
