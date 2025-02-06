import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Recipe } from '../shared/recipe';
import { Ingredient } from '../shared/ingredient';
import { RecipeComponent } from './../recipe/recipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { StartersService } from '../dishes/starters.service';
import { MaindishesService } from '../dishes/maindishes.service';
import { DessertsService } from '../dishes/desserts.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    MatIconModule,
    RecipeComponent,
    ShoppingListComponent,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  starters: Recipe[] = [];
  mainDishes: Recipe[] = [];
  desserts: Recipe[] = [];
  shoppingList: Ingredient[] = [];

  constructor(
    private startersService: StartersService,
    private maindishesService: MaindishesService,
    private dessertsService: DessertsService
  ) {
    this.getStarters();
    this.getMaindishes();
    this.getDesserts();
  }

  getStarters(): void {
    this.starters = this.startersService.getStarters();
  }

  getMaindishes(): void {
    this.mainDishes = this.maindishesService.getMainDishes();
  }

  getDesserts(): void {
    this.desserts = this.dessertsService.getDesserts();
  }
}
