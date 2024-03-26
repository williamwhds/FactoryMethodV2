import { promptSelect } from './lib/prompts.js';
import { PizzaStoreJamaica } from './PizzaStoreJamaica.js';
let jamaicaPizza = new PizzaStoreJamaica('Kingston/JAMAICA');
let option: number = -1;
while (option !== 4) {
  option = await promptSelect({
    message: 'Escolha uma pizza',
    choices: [
      'CALABRESA',
      'PORTUGUESA',
      'QUATRO QUEIJOS',
      'VEGETARIANA',
      'Sair',
    ],
  });
  switch (option) {
    case 0:
      console.log('=====================');
      jamaicaPizza.orderPizza('CALABRESA');
      console.log('=====================');
      break;
    case 1:
      console.log('=====================');
      jamaicaPizza.orderPizza('PORTUGUESA');
      console.log('=====================');
      break;
    case 2:
      console.log('=====================');
      jamaicaPizza.orderPizza('QUATROQUEIJOS');
      console.log('=====================');
      break;
    case 3:
      console.log('=====================');
      jamaicaPizza.orderPizza('VEGETARIANA');
      console.log('=====================');
      break;
  }
}
