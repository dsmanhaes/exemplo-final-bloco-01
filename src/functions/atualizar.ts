import { Produto } from "../classes/Produto";
import { apresentar } from "./apresentar";
import { userInput } from "./userInput";

function atualizar (estoque: Produto[]) {
  apresentar(estoque);
  let id: number;
  do {
    id = Number(userInput('Digite o id do item que deseja atualizar: '));
  } while (isNaN(id));
  
  const name = userInput('Digite o novo nome do produto: ');
  let quantity: number;
  do {
    quantity = Number(userInput('Digite a nova quantidade do produto no estoque: '));
  } while (isNaN(quantity));

  const produto = new Produto(name,quantity);

  estoque[id - 1] = produto;
}

export { atualizar };
