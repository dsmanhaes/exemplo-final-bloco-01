import { Produto } from './classes/Produto';
import { menuController } from './functions/menuController';
import { optionController } from './functions/optionController';
import { Option } from './Option';

try {
  const estoque: Produto[] = [];
  let option: Option;

  do {
    try {
      option = menuController();
      optionController(estoque, option);
    } catch (error) {
      console.log(error.message);
    }
  } while (option != Option.Sair);
} catch (error) {
  console.log(error.message);
}
