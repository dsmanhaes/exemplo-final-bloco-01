import { Produto } from '../classes/Produto';
import { userInput } from './userInput';

function armazenar (estoque: Produto[]) {
  console.clear();
  console.log('Cadastro de novo produto');
  const name = userInput('Digite o nome do novo produto: ');
  let quantity: number;
  do {
    quantity = Number(userInput('Digite a quantidade do produto no estoque: '));
  } while (isNaN(quantity));

  const produto = new Produto(name,quantity);
  estoque.push(produto);
}

export { armazenar };
