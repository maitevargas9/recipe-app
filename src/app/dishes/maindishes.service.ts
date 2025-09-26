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
      dietType: 'Non vegetarian/vegan',
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
    {
      nameRecipe: 'Pasta with pesto',
      dish: 'Main Dish',
      dietType: 'Vegetarian',
      portion: 5,
      ingredients: [
        { amount: 500, ingredient: 'g pasta' },
        { amount: 1, ingredient: 'pesto' },
        { amount: 1, ingredient: 'basil' },
        { amount: 1, ingredient: 'parmesan' },
      ],
      description:
        'Cook the noodles. Add noodles to the plate and add as much pesto as desired. Garnish with basil and parmesan.',
    },
    {
      nameRecipe: 'Vegetable Curry with Rice',
      dish: 'Main Dish',
      dietType: 'Vegan',
      portion: 4,
      ingredients: [
        { amount: 300, ingredient: 'g basmati rice' },
        { amount: 2, ingredient: 'carrots' },
        { amount: 1, ingredient: 'zucchini' },
        { amount: 1, ingredient: 'broccoli' },
        { amount: 1, ingredient: 'can coconut milk' },
        { amount: 2, ingredient: 'tbsp curry paste' },
        { amount: 1, ingredient: 'tbsp oil' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Cook rice according to package instructions. Wash and chop vegetables. Heat oil in a pan, fry curry paste briefly, then add vegetables and sauté. Pour in coconut milk, season with salt and pepper, and simmer until vegetables are cooked. Serve with rice.',
    },
    {
      nameRecipe: 'Spaghetti Carbonara',
      dish: 'Main Dish',
      dietType: 'Non vegetarian/vegan',
      portion: 4,
      ingredients: [
        { amount: 400, ingredient: 'g spaghetti' },
        { amount: 150, ingredient: 'g pancetta or bacon' },
        { amount: 3, ingredient: 'eggs' },
        { amount: 50, ingredient: 'g parmesan' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Cook spaghetti until al dente. Fry pancetta in a pan until crispy. Beat eggs with grated parmesan, salt and pepper. Drain pasta, add pancetta and remove from heat. Stir in egg mixture quickly so it becomes creamy. Serve immediately.',
    },
    {
      nameRecipe: 'Stuffed Bell Peppers',
      dish: 'Main Dish',
      dietType: 'Vegetarian',
      portion: 4,
      ingredients: [
        { amount: 4, ingredient: 'bell peppers' },
        { amount: 150, ingredient: 'g rice' },
        { amount: 1, ingredient: 'onion' },
        { amount: 2, ingredient: 'tomatoes' },
        { amount: 100, ingredient: 'g feta cheese' },
        { amount: 1, ingredient: 'tbsp olive oil' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Cook rice. Cut the top off the peppers and remove seeds. Chop onion and tomatoes, fry with olive oil, then mix with rice and crumbled feta. Fill peppers with mixture and place in a baking dish. Bake at 180°C for about 30 minutes.',
    },
    {
      nameRecipe: 'Chicken Stir-Fry with Vegetables',
      dish: 'Main Dish',
      dietType: 'Non vegetarian/vegan',
      portion: 4,
      ingredients: [
        { amount: 400, ingredient: 'g chicken breast' },
        { amount: 1, ingredient: 'broccoli' },
        { amount: 1, ingredient: 'red pepper' },
        { amount: 2, ingredient: 'carrots' },
        { amount: 3, ingredient: 'tbsp soy sauce' },
        { amount: 1, ingredient: 'tbsp sesame oil' },
        { amount: 1, ingredient: 'garlic clove' },
        { amount: 1, ingredient: 'ginger (small piece)' },
      ],
      description:
        'Cut chicken into strips. Wash and chop vegetables. Heat sesame oil in a pan, fry garlic and ginger briefly. Add chicken and fry until golden. Add vegetables and stir-fry for a few minutes. Pour in soy sauce and serve with rice or noodles.',
    },
    {
      nameRecipe: 'Chickpea Stew',
      dish: 'Main Dish',
      dietType: 'Vegan',
      portion: 4,
      ingredients: [
        { amount: 1, ingredient: 'can chickpeas' },
        { amount: 1, ingredient: 'can tomatoes' },
        { amount: 1, ingredient: 'onion' },
        { amount: 2, ingredient: 'carrots' },
        { amount: 1, ingredient: 'celery stalk' },
        { amount: 2, ingredient: 'tbsp olive oil' },
        { amount: 1, ingredient: 'tsp paprika' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Chop onion, carrots and celery. Heat olive oil in a pot, sauté vegetables until soft. Add chickpeas and canned tomatoes. Season with paprika, salt and pepper. Simmer for 20 minutes and serve warm with bread.',
    },
    {
      nameRecipe: 'Spinach Lasagna',
      dish: 'Main Dish',
      dietType: 'Vegetarian',
      portion: 6,
      ingredients: [
        { amount: 12, ingredient: 'lasagna sheets' },
        { amount: 500, ingredient: 'g spinach (fresh or frozen)' },
        { amount: 250, ingredient: 'g ricotta cheese' },
        { amount: 100, ingredient: 'g grated mozzarella' },
        { amount: 1, ingredient: 'onion' },
        { amount: 2, ingredient: 'garlic cloves' },
        { amount: 500, ingredient: 'ml tomato sauce' },
        { amount: 1, ingredient: 'tbsp olive oil' },
        { amount: 1, ingredient: 'salt' },
        { amount: 1, ingredient: 'pepper' },
      ],
      description:
        'Cook spinach and chop finely. Mix with ricotta, salt and pepper. Fry onion and garlic in olive oil, add tomato sauce and season. Layer lasagna sheets with spinach mixture and tomato sauce in a baking dish. Top with mozzarella and bake at 180°C for 35 minutes.',
    },
  ];
  getMainDishes(): Recipe[] {
    return this.MainDishes;
  }
}
