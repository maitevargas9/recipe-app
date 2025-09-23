import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  /*constructor() {}

  Shoppinglist: Ingredient[] = [
    { amount: 200, ingredient: 'ml cream' },
    { amount: 200, ingredient: 'ml lemon juice' },
  ];*/

  Shoppinglist: Ingredient[] = [
    { amount: 2, ingredient: 'Bananen' },
    { amount: 1, ingredient: 'l Milch' },
    { amount: 1, ingredient: 'Pck Vanillinzucker' },
  ];
  getShoppinglist(): Ingredient[] {
    return this.Shoppinglist;
  }
}
