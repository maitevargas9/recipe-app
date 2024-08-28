import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Injectable({
  providedIn: 'root',
})
export class MaindishesService {
  constructor() {}

  MainDishes: Recipe[] = [
    {
      nameRecipe: 'Pasta with tomato sauce',
      dish: 'Main Dish',
      portion: 5,
      ingredients: [
        { amount: 500, ingredient: 'g pasta (Penne)' },
        { amount: 780, ingredient: 'g tomate frito' },
        { amount: 150, ingredient: 'g chorizo' },
        { amount: 1, ingredient: 'oregano' },
        { amount: 1, ingredient: 'parmesan' },
      ],
      description:
        'Cut the chorizo into small pieces. Put the sauce in a saucepan and heat. Add the chorizo and oregano. Meanwhile, cook and shake the pasta as soon as they are done. Then add the pasta to the sauce and let it sit for 5 to 10 minutes. Serve the pasta with the sauce and sprinkle with Parmesan.',
    },
  ];
  getMainDishes(): Recipe[] {
    return this.MainDishes;
  }
}
