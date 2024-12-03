import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ShoppingList } from '../shared/shoppinglist';
import { Ingredient } from '../shared/ingredient';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: Ingredient[] = [
  { amount: 1, ingredient: 'Hydrogen' },
  { amount: 2, ingredient: 'Helium' },
];

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
  dataSource = ELEMENT_DATA;
}
