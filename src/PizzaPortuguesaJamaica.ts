import { Pizza } from './Pizza.js';
import { IngredientType } from './types.js';

export class PizzaPortuguesaJamaica extends Pizza {
  constructor() {
    const ingredients: IngredientType[] = [
      { name: 'queijo muçarela', quantity: 100 },
      { name: 'tomate', quantity: 100 },
      { name: 'ovo cozido', quantity: 50 },
      { name: 'cebola', quantity: 50 },
      { name: 'molho', quantity: 100 },
      { name: 'pimentão jamaicano', quantity: 50}
    ];
    super(ingredients);

    console.log('Ingredientes da pizza portuguesa jamaica: ');
    for (const ingredient of ingredients) {
      console.log(`${ingredient.quantity}g de ${ingredient.name}`);
    }

    this.prepare();
    this.bake()
    this.cut();
    this.box();
  }

  prepare(): void {
    console.log('Preparando pizza portuguesa');
  }

  bake(): void {
    console.log('Assando pizza portuguesa');
  }

  cut(): void {
    console.log('Cortando pizza portuguesa');
  }

  box(): void {
    console.log('Embalando pizza portuguesa');
  }
}
