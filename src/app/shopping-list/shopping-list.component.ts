import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Ingredient } from '../shared/ingredient';
import { RecipeComponent } from '../recipe/recipe.component';
import { ShoppinglistService } from '../dishes/shoppinglist.service';

// let ingredientList: IngredientsList[] = [];

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  constructor(private shoppinglistService: ShoppinglistService) {
    this.shoppinglistService;
  }

  ingredientList: Ingredient[] = [];
  ingredienList = this.shoppinglistService.getShoppinglist();

  displayedColumns: string[] = ['amount', 'ingredient'];
  dataSource = this.ingredientList;
}
