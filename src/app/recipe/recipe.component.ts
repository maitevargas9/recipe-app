import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  di: Recipe = {
    nameRecipe: 'Greek Salad',
    dish: 'Starter',
    portion: 4,
    ingredients: [
      { amount: 500, ingredient: 'g Tomatoes' },
      { amount: 1, ingredient: 'Cucumber' },
      { amount: 1, ingredient: 'Pepper (green)' },
      { amount: 1, ingredient: 'Pepper (red)' },
      { amount: 2, ingredient: 'Onions' },
      { amount: 1, ingredient: 'Glass of Olives' },
      { amount: 1, ingredient: 'Feta Cheese' },
      { amount: 125, ingredient: 'ml Olive oil' },
      { amount: 1, ingredient: 'Lemon (juice)' },
      { amount: 1, ingredient: 'Salt' },
      { amount: 1, ingredient: 'Pepper' },
      { amount: 1, ingredient: 'Oregano' },
    ],
    description:
      'Wash cucumber and cut into thin slices or pieces. Wash peppers, deseed and cut into thin strips. Wash tomatoes and eighths. Peel onions and cut into thin rings. Dice feta cheese and sprinkle with oregano. Drain olives and put in a bowl with cucumber, peppers, tomatoes, onions and feta cheese. Stir olive oil, lemon juice, salt and pepper into a sauce and pour over salad. Stir.',
  };
}
