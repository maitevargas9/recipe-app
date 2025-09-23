import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  private ingredients: Ingredient[] = [];

  addIngredients(items: Ingredient[]) {
    items.forEach((item) => {
      const existing = this.ingredients.find(
        (i) => i.ingredient === item.ingredient
      );
      if (existing) {
        existing.amount = Number(existing.amount) + Number(item.amount);
      } else {
        this.ingredients.push({ ...item });
      }
    });
  }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  clearIngredients() {
    this.ingredients = [];
  }
}
