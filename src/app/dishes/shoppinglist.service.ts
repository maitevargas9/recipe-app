import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  constructor() {}

  Shoppinglist: Ingredient[] = [
    { amount: 200, ingredient: 'ml cream' },
    { amount: 200, ingredient: 'ml cream' },
  ];
  getShoppinglist(): Ingredient[] {
    return this.Shoppinglist;
  }
}
