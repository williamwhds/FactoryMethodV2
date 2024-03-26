import { PizzaCalabresaJamaica } from './PizzaCalabresaJamaica.js';
import { PizzaQuatroQueijosJamaica } from './PizzaQuatroQueijosJamaica.js';
import { PizzaPortuguesaJamaica } from './PizzaPortuguesaJamaica.js';
import { PizzaVegetarianaJamaica } from './PizzaVegetarianaJamaica.js';
export class PizzaStoreJamaica {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    getName() {
        return this.name;
    }
    orderPizza(str) {
        if (!this.name.endsWith("JAMAICA")) {
            console.log("País incorreto!");
            return null;
        }
        let pizzaType = { name: str };
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
