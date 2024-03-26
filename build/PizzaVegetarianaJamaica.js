import { Pizza } from './Pizza.js';
export class PizzaVegetarianaJamaica extends Pizza {
    constructor() {
        const ingredients = [
            { name: 'queijo muçarela', quantity: 100 },
            { name: 'berinjela', quantity: 200 },
            { name: 'azeitonas', quantity: 50 },
            { name: 'molho', quantity: 100 },
            { name: 'pimentão jamaicano', quantity: 50 }
        ];
        super(ingredients);
        console.log('Ingredientes da pizza vegetariana jamaica: ');
        for (const ingredient of ingredients) {
            console.log(`${ingredient.quantity}g de ${ingredient.name}`);
        }
        this.prepare();
        this.bake();
        this.cut();
        this.box();
    }
    prepare() {
        console.log('Preparando pizza vegetariana');
    }
    bake() {
        console.log('Assando pizza vegetariana');
    }
    cut() {
        console.log('Cortando pizza vegetariana');
    }
    box() {
        console.log('Embalando pizza vegetariana');
    }
}
