import { PizzaStoreFranchise } from './PizzaStoreFranchise.js';
import { PizzaCalabresaJamaica } from './PizzaCalabresaJamaica.js';
import { PizzaQuatroQueijosJamaica } from './PizzaQuatroQueijosJamaica.js';
import { PizzaPortuguesaJamaica } from './PizzaPortuguesaJamaica.js';
import { PizzaVegetarianaJamaica } from './PizzaVegetarianaJamaica.js';
import { Pizza } from './Pizza.js';
import { PizzaType } from './types.js';

export class PizzaStoreJamaica implements PizzaStoreFranchise {
  private name: string = '';
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  orderPizza(str: string): Pizza | null {
    if (!this.name.endsWith("JAMAICA")) {
      console.log("País incorreto!");
      return null;
    }

    let pizzaType: PizzaType = { name: str };
    if (pizzaType.name == 'QUATROQUEIJOS') {
      return new PizzaQuatroQueijosJamaica();
    }
    if (pizzaType.name == 'CALABRESA') {
      return new PizzaCalabresaJamaica();
    }
    if (pizzaType.name == 'PORTUGUESA') {
      return new PizzaPortuguesaJamaica();
    }
    if (pizzaType.name == 'VEGETARIANA') {
      return new PizzaVegetarianaJamaica();
    }

    return null;
  }
}
