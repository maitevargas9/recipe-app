import { Component } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Ingredient } from '../shared/ingredient';
import { ShoppinglistService } from '../dishes/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  shoppingList: Ingredient[] = [];

  constructor(private shoppinglistService: ShoppinglistService) {
    this.getShoppinglist();
  }

  getShoppinglist(): void {
    this.shoppingList = this.shoppinglistService.getShoppinglist();
  }

  displayedColumns: string[] = ['amount', 'ingredient'];
}
