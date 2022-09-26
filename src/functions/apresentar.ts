import { Produto } from "../classes/Produto";

function apresentar (estoque: Produto[]) {
  console.clear();
  console.log('Listagem de produtos do estoque');
  
  if (estoque.length == 0) {
    console.log('Estoque vazio!!!');
  } else {
    estoque.forEach((produto, index) => {
      console.log(`Item ${index + 1}: ${produto.quantity}x ${produto.name}`);
    });
  }
}

export { apresentar };
