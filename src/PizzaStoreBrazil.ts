import { PizzaStoreFranchise } from './PizzaStoreFranchise.js';
import { PizzaCalabresa } from './PizzaCalabresa.js';
import { PizzaQuatroQueijos } from './PizzaQuatroQueijos.js';
import { PizzaPortuguesa } from './PizzaPortuguesa.js';
import { PizzaVegetariana } from './PizzaVegetariana.js';
import { Pizza } from './Pizza.js';
import { PizzaType } from './types.js';

export class PizzaStoreBrazil implements PizzaStoreFranchise {
  private name: string = '';
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  orderPizza(str: string): Pizza | null {
    if (!this.name.endsWith('BRASIL')) {
      console.log('País incorreto!');
      return null;
    }

    let pizzaType: PizzaType = { name: str };
    if (pizzaType.name == 'QUATROQUEIJOS') {
      return new PizzaQuatroQueijos();
    }
    if (pizzaType.name == 'CALABRESA') {
      return new PizzaCalabresa();
    }
    if (pizzaType.name == 'PORTUGUESA') {
      return new PizzaPortuguesa();
    }
    if (pizzaType.name == 'VEGETARIANA') {
      return new PizzaVegetariana();
    }

    return null;
  }
}
