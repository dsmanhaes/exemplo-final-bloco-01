import { Produto } from '../classes/Produto';
import { Option } from '../Option';
import { apresentar } from './apresentar';
import { armazenar } from './armazenar';
import { atualizar } from './atualizar';
import { remover } from './remover';
import { userInput } from './userInput';

function optionController (estoque: Produto[], option: Option) {
  switch (option) {
    case Option.Armazenar:
      armazenar(estoque);
      break;
    case Option.Remover:
      remover(estoque);
      break;
    case Option.Atualizar:
      atualizar(estoque);
      break;
    case Option.Apresentar:
      apresentar(estoque);
      break;
  }
  userInput('Pressione enter para continuar...');
}

export { optionController };
