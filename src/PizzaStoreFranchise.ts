import { PizzaType } from './types.js';
import { Pizza } from './Pizza.js';
import { PizzaQuatroQueijos } from './PizzaQuatroQueijos.js';
import { PizzaCalabresa } from './PizzaCalabresa.js';
import { PizzaPortuguesa } from './PizzaPortuguesa.js';
import { PizzaVegetariana } from './PizzaVegetariana.js';

export abstract class PizzaStoreFranchise {
  abstract getName(): string;

  abstract orderPizza(str: string): Pizza | null;
}
