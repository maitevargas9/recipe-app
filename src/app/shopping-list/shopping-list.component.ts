import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Ingredient } from '../shared/ingredient';
import { RecipeComponent } from '../recipe/recipe.component';
import { IngredientsList } from '../shared/ingredientsList';

export interface ShoppingList {
  amount: number;
  ingredient: string;
}

const DATA_LIST: ShoppingList[] = [
  { amount: 250, ingredient: 'g mascarpone' },
  { amount: 250, ingredient: 'g quark' },
];

let ingredientsList: IngredientsList[] = [];

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  constructor() {}
  shoppingList: ShoppingList | null = null;
  displayedColumns: string[] = ['amount', 'ingredient'];
  dataSource = ingredientsList;
}
