import { Pizza } from './Pizza.js';
export class PizzaQuatroQueijosJamaica extends Pizza {
    constructor() {
        const ingredients = [
            { name: 'queijo muçarela', quantity: 50 },
            { name: 'queijo gorgonzola', quantity: 50 },
            { name: 'queijo provolone', quantity: 50 },
            { name: 'queijo parmesão', quantity: 50 },
            { name: 'molho', quantity: 100 },
            { name: 'pimentão jamaicano', quantity: 50 }
        ];
        super(ingredients);
        console.log('Ingredientes da pizza quatro queijos jamaica: ');
        for (const ingredient of ingredients) {
            console.log(`${ingredient.quantity}g de ${ingredient.name}`);
        }
        this.prepare();
        this.bake();
        this.cut();
        this.box();
    }
    prepare() {
        console.log('Preparando pizza quatro queijos');
    }
    bake() {
        console.log('Assando pizza quatro queijos');
    }
    cut() {
        console.log('Cortando pizza quatro queijos');
    }
    box() {
        console.log('Embalando pizza quatro queijos');
    }
}
