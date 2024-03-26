import { PizzaCalabresa } from './PizzaCalabresa.js';
import { PizzaQuatroQueijos } from './PizzaQuatroQueijos.js';
import { PizzaPortuguesa } from './PizzaPortuguesa.js';
import { PizzaVegetariana } from './PizzaVegetariana.js';
export class PizzaStoreBrazil {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    getName() {
        return this.name;
    }
    orderPizza(str) {
        if (!this.name.endsWith('BRASIL')) {
            console.log('País incorreto!');
            return null;
        }
        let pizzaType = { name: str };
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
