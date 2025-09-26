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
      dietType: 'Vegetarian',
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
    {
      nameRecipe: 'Greek Potato Salad',
      dish: 'Starter',
      dietType: 'Vegan',
      portion: 2,
      ingredients: [
        { amount: 200, ingredient: 'g potatoes' },
        { amount: 1, ingredient: 'onion' },
        { amount: 1, ingredient: 'parsley' },
        { amount: 1, ingredient: 'lemon (juice)' },
        { amount: 25, ingredient: 'ml olive oil' },
      ],
      description:
        'Slice the cooked potatoes. Arrange the slices on a plate. Decorate with onion and parsley. Serve with olive oil and lemon juice.',
    },
    {
      nameRecipe: 'Bruschetta',
      dish: 'Starter',
      dietType: 'Vegetarian',
      portion: 4,
      ingredients: [
        { amount: 1, ingredient: 'baguette' },
        { amount: 4, ingredient: 'tomatoes' },
        { amount: 2, ingredient: 'garlic cloves' },
        { amount: 50, ingredient: 'ml olive oil' },
        { amount: 1, ingredient: 'bunch of fresh basil' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Cut baguette into slices and toast lightly. Rub with garlic. Dice tomatoes and mix with olive oil, salt, pepper and chopped basil. Spread tomato mixture onto the baguette slices and serve immediately.',
    },
    {
      nameRecipe: 'Caprese Salad',
      dish: 'Starter',
      dietType: 'Vegetarian',
      portion: 4,
      ingredients: [
        { amount: 4, ingredient: 'tomatoes' },
        { amount: 250, ingredient: 'g mozzarella' },
        { amount: 1, ingredient: 'bunch of fresh basil' },
        { amount: 50, ingredient: 'ml olive oil' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Slice tomatoes and mozzarella. Arrange alternately on a plate. Sprinkle with salt and pepper, drizzle with olive oil and garnish with fresh basil leaves.',
    },
    {
      nameRecipe: 'Lentil Soup',
      dish: 'Starter',
      dietType: 'Vegan',
      portion: 4,
      ingredients: [
        { amount: 200, ingredient: 'g red lentils' },
        { amount: 1, ingredient: 'onion' },
        { amount: 2, ingredient: 'carrots' },
        { amount: 1, ingredient: 'celery stalk' },
        { amount: 1, ingredient: 'liter vegetable broth' },
        { amount: 1, ingredient: 'tbsp olive oil' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
        { amount: 1, ingredient: 'cumin' },
      ],
      description:
        'Peel and chop onion, carrots and celery. Heat olive oil in a pot, sauté vegetables briefly. Add lentils and vegetable broth. Season with salt, pepper and cumin. Simmer for about 20 minutes until lentils are soft. Serve warm.',
    },
    {
      nameRecipe: 'Shrimp Cocktail',
      dish: 'Starter',
      dietType: 'Non vegetarian/vegan',
      portion: 2,
      ingredients: [
        { amount: 200, ingredient: 'g cooked shrimp' },
        { amount: 2, ingredient: 'tbsp mayonnaise' },
        { amount: 2, ingredient: 'tbsp ketchup' },
        { amount: 1, ingredient: 'tbsp lemon juice' },
        { amount: 1, ingredient: 'lettuce leaves' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Mix mayonnaise, ketchup and lemon juice into a cocktail sauce. Season with salt and pepper. Arrange lettuce leaves in glasses, add shrimp and top with sauce. Serve chilled.',
    },
    {
      nameRecipe: 'Stuffed Mushrooms',
      dish: 'Starter',
      dietType: 'Vegetarian',
      portion: 4,
      ingredients: [
        { amount: 12, ingredient: 'large mushrooms' },
        { amount: 100, ingredient: 'g cream cheese' },
        { amount: 50, ingredient: 'g grated parmesan' },
        { amount: 1, ingredient: 'garlic clove' },
        { amount: 1, ingredient: 'bunch of parsley' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Clean mushrooms and remove stems. Chop stems finely and mix with cream cheese, grated parmesan, minced garlic, chopped parsley, salt and pepper. Fill the mushroom caps with the mixture and bake at 180°C for about 15 minutes.',
    },
    {
      nameRecipe: 'Smoked Salmon Rolls',
      dish: 'Starter',
      dietType: 'Non vegetarian/vegan',
      portion: 4,
      ingredients: [
        { amount: 200, ingredient: 'g smoked salmon' },
        { amount: 100, ingredient: 'g cream cheese' },
        { amount: 1, ingredient: 'lemon (juice)' },
        { amount: 1, ingredient: 'bunch of dill' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Spread cream cheese thinly onto smoked salmon slices. Drizzle with lemon juice, season with pepper and sprinkle with chopped dill. Roll up tightly, cut into bite-sized pieces and serve chilled.',
    },
  ];
  getStarters(): Recipe[] {
    return this.Starters;
  }
}
