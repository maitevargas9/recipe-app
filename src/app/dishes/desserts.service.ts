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
    {
      nameRecipe: 'Apple Crumble',
      dish: 'Dessert',
      dietType: 'Vegetarian',
      portion: 6,
      ingredients: [
        { amount: 4, ingredient: 'apples' },
        { amount: 100, ingredient: 'g flour' },
        { amount: 80, ingredient: 'g sugar' },
        { amount: 80, ingredient: 'g butter' },
        { amount: 1, ingredient: 'tsp cinnamon' },
      ],
      description:
        'Peel and slice apples, place them in a baking dish and sprinkle with cinnamon. Mix flour, sugar and butter into crumbles and spread over apples. Bake at 180°C for about 30 minutes until golden brown. Serve warm, optionally with vanilla ice cream.',
    },
    {
      nameRecipe: 'Panna Cotta with Berry Sauce',
      dish: 'Dessert',
      dietType: 'Vegetarian',
      portion: 4,
      ingredients: [
        { amount: 400, ingredient: 'ml cream' },
        { amount: 50, ingredient: 'g sugar' },
        { amount: 1, ingredient: 'vanilla pod' },
        { amount: 4, ingredient: 'sheets gelatin' },
        { amount: 200, ingredient: 'g mixed berries' },
      ],
      description:
        'Soak gelatin in cold water. Heat cream with sugar and vanilla, but do not boil. Dissolve softened gelatin in the hot cream. Pour into molds and refrigerate for at least 4 hours. Puree berries into a sauce and serve with panna cotta.',
    },
    {
      nameRecipe: 'Vegan Chocolate Mousse',
      dish: 'Dessert',
      dietType: 'Vegan',
      portion: 4,
      ingredients: [
        { amount: 200, ingredient: 'g dark chocolate (vegan)' },
        { amount: 400, ingredient: 'ml coconut cream' },
        { amount: 2, ingredient: 'tbsp maple syrup' },
        { amount: 1, ingredient: 'tsp vanilla extract' },
      ],
      description:
        'Melt chocolate gently. Whip chilled coconut cream until fluffy. Stir in melted chocolate, maple syrup and vanilla extract. Fill into glasses and refrigerate for at least 2 hours before serving.',
    },
    {
      nameRecipe: 'Rice Pudding with Cinnamon',
      dish: 'Dessert',
      dietType: 'Vegetarian',
      portion: 4,
      ingredients: [
        { amount: 200, ingredient: 'g rice for pudding' },
        { amount: 1, ingredient: 'liter milk' },
        { amount: 80, ingredient: 'g sugar' },
        { amount: 1, ingredient: 'tsp cinnamon' },
        { amount: 1, ingredient: 'pinch of salt' },
      ],
      description:
        'Bring milk with sugar and salt to a boil. Add rice and cook over low heat, stirring occasionally, until soft and creamy (about 30 minutes). Sprinkle with cinnamon before serving.',
    },
    {
      nameRecipe: 'Vegan Banana Ice Cream',
      dish: 'Dessert',
      dietType: 'Vegan',
      portion: 2,
      ingredients: [
        { amount: 3, ingredient: 'ripe bananas' },
        { amount: 1, ingredient: 'tsp cocoa powder' },
        { amount: 1, ingredient: 'tsp peanut butter' },
      ],
      description:
        'Peel bananas, cut into slices and freeze for at least 4 hours. Blend frozen banana slices with cocoa powder and peanut butter until creamy. Serve immediately as soft ice or freeze again for a firmer texture.',
    },
    {
      nameRecipe: 'Tiramisu',
      dish: 'Dessert',
      dietType: 'Vegetarian',
      portion: 6,
      ingredients: [
        { amount: 200, ingredient: 'g ladyfingers' },
        { amount: 500, ingredient: 'g mascarpone' },
        { amount: 3, ingredient: 'eggs' },
        { amount: 100, ingredient: 'g sugar' },
        { amount: 200, ingredient: 'ml espresso (cold)' },
        { amount: 20, ingredient: 'g cocoa powder' },
      ],
      description:
        'Separate eggs. Beat egg yolks with sugar until creamy, then fold in mascarpone. Beat egg whites until stiff and fold in gently. Dip ladyfingers briefly into espresso and layer with mascarpone cream in a dish. Finish with cream and dust with cocoa powder. Refrigerate for at least 3 hours.',
    },
  ];
  getDesserts(): Recipe[] {
    return this.Desserts;
  }
}
