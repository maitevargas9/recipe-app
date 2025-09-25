import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {
  constructor() {}

  Desserts: Recipe[] = [
    {
      nameRecipe: 'Raspberry Dessert with Speculatius',
      dish: 'Dessert',
      dietType: 'Vegetarian',
      portion: 8,
      ingredients: [
        { amount: 200, ingredient: 'ml cream' },
        { amount: 250, ingredient: 'g mascarpone' },
        { amount: 250, ingredient: 'g quark' },
        { amount: 125, ingredient: 'g sugar' },
        { amount: 8, ingredient: 'g vanillin sugar' },
        { amount: 350, ingredient: 'g raspberry (frozen)' },
        { amount: 250, ingredient: 'g spekulatius (biscuit)' },
        { amount: 15, ingredient: 'ml lemon juice' },
      ],
      description:
        'Whisk the cream. Mix the quark, mascarpone, sugar, vanilla sugar and lemon juice. Fold in the cream. Cover the bottom with three or four tablespoons of cream in a sufficiently high square or round bowl. Spread a layer of speculatius, broken whole or in pieces. Spread half of the remaining cream on top. Spread the frozen raspberries on top, cover with the rest of the cream so that they are no longer visible. Spread crumbled speculatius (quantity as desired) over. The cream must be refrigerated for at least 4 hours. Before serving, you can sprinkle some icing sugar on top.',
    },
    {
      nameRecipe: 'Chocolate cake',
      dish: 'Dessert',
      dietType: 'Vegetarian',
      portion: 12,
      ingredients: [
        { amount: 250, ingredient: 'g chocolate' },
        { amount: 250, ingredient: 'g butter' },
        { amount: 250, ingredient: 'g sugar' },
        { amount: 180, ingredient: 'g flour' },
        { amount: 4, ingredient: 'eggs' },
        { amount: 8, ingredient: 'g vanillin sugar' },
        { amount: 15, ingredient: 'g baking powder' },
        { amount: 6, ingredient: 'tablespoon water' },
      ],
      description:
        'Melt the chocolate. Mix all the ingredients together and bake in the oven for about 1 hour at 170 degrees.',
    },
  ];
  getDesserts(): Recipe[] {
    return this.Desserts;
  }
}
