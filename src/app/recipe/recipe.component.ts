import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { Ingredient } from '../shared/ingredient';
import { ShoppinglistService } from '../dishes/shoppinglist.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input() dish: Recipe | null = null;

  portion!: number;
  ingredients: Ingredient[] = [];
  scaledIngredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {
    if (this.dish) {
      this.portion = this.dish.portion;
      this.ingredients = this.dish.ingredients;
      this.updateScaledIngredients();
    }
  }

  updateScaledIngredients() {
    if (!this.dish) {
      return;
    }

    this.scaledIngredients = this.ingredients.map((ing) => {
      const originalAmount = Number(ing.amount);
      const scaledAmount = originalAmount * (this.portion / this.dish!.portion);
      return { ...ing, amount: scaledAmount };
    });
  }

  onChange(newPortion: number) {
    this.portion = newPortion;
    this.updateScaledIngredients();
  }

  addIngredients() {
    if (this.scaledIngredients.length) {
      this.shoppingListService.addIngredients(this.scaledIngredients);
    }
  }

  get ingredientsText(): string {
    return this.scaledIngredients && this.scaledIngredients.length > 0
      ? this.scaledIngredients
          .map((ing) => `${ing.amount} ${ing.ingredient}`)
          .join(', ')
      : '';
  }
}
