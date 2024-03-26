import { Pizza } from './Pizza.js';
export class PizzaCalabresaJamaica extends Pizza {
    constructor() {
        const ingredients = [
            { name: 'queijo muçarela', quantity: 100 },
            { name: 'calabresa', quantity: 100 },
            { name: 'azeitona', quantity: 50 },
            { name: 'molho', quantity: 100 },
            { name: 'pimentão jamaicano', quantity: 50 },
        ];
        super(ingredients);
        console.log('Ingredientes da pizza de calabresa jamaica: ');
        for (const ingredient of ingredients) {
            console.log(`${ingredient.quantity}g de ${ingredient.name}`);
        }
        this.prepare();
        this.bake();
        this.cut();
        this.box();
    }
    prepare() {
        console.log('Preparando pizza de calabresa');
    }
    bake() {
        console.log('Assando pizza de calabresa');
    }
    cut() {
        console.log('Cortando pizza de calabresa');
    }
    box() {
        console.log('Embalando pizza de calabresa');
    }
}
