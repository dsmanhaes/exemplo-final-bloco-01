import { Option } from "../Option";
import { showMenu } from "./showMenu";
import { userInput } from "./userInput";

function menuController (): Option {
  while (true) {
    console.clear();
    showMenu();
    const option = userInput('>> ');

    switch (option) {
      case '1':
        return Option.Armazenar;
      case '2':
        return Option.Remover;
      case '3':
        return Option.Atualizar;
      case '4':
        return Option.Apresentar;
      case '5':
        return Option.Sair;
      default:
        console.log('Opção inválida!!!\n');
        userInput('Pressione enter para continuar...');
    }
  }
}

export { menuController };
