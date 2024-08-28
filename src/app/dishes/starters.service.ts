import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Injectable({
  providedIn: 'root',
})
export class StartersService {
  constructor() {}

  Starters: Recipe[] = [
    {
      nameRecipe: 'Greek Salad',
      dish: 'Starter',
      portion: 4,
      ingredients: [
        { amount: 500, ingredient: 'g tomatoes' },
        { amount: 1, ingredient: 'cucumber' },
        { amount: 1, ingredient: 'pepper (green)' },
        { amount: 1, ingredient: 'pepper (red)' },
        { amount: 2, ingredient: 'onions' },
        { amount: 1, ingredient: 'glass of olives' },
        { amount: 1, ingredient: 'feta cheese' },
        { amount: 125, ingredient: 'ml olive oil' },
        { amount: 1, ingredient: 'lemon (juice)' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
        { amount: 1, ingredient: 'oregano' },
      ],
      description:
        'Wash cucumber and cut into thin slices or pieces. Wash peppers, deseed and cut into thin strips. Wash tomatoes and eighths. Peel onions and cut into thin rings. Dice feta cheese and sprinkle with oregano. Drain olives and put in a bowl with cucumber, peppers, tomatoes, onions and feta cheese. Stir olive oil, lemon juice, salt and pepper into a sauce and pour over salad. Stir.',
    },
  ];
  getStarters(): Recipe[] {
    return this.Starters;
  }
}
