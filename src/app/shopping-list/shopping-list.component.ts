import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../shared/ingredient';
import { ShoppinglistService } from '../dishes/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  pdfMake: any;

  constructor(private shoppingListService: ShoppinglistService) {}

  async ngOnInit(): Promise<void> {
    this.ingredients = this.shoppingListService.getShoppinglist();

    const pdfMakeModule = await import('pdfmake/build/pdfmake');
    const pdfFontsModule = await import('pdfmake/build/vfs_fonts');

    this.pdfMake = pdfMakeModule.default || pdfMakeModule;
    this.pdfMake.vfs = pdfFontsModule.default?.vfs || pdfFontsModule.vfs;
  }

  generatePdf() {
    if (!this.pdfMake) {
      console.error('pdfMake not yet loaded!');
      return;
    }

    const docDefinition = {
      pageSize: 'A5',
      pageMargins: [40, 40, 40, 40],
      content: [
        {
          text: 'Shopping List',
          bold: true,
          fontSize: 16,
          margin: [0, 0, 0, 10],
        },
        {
          ul: this.ingredients.map((ing) => `${ing.amount} ${ing.ingredient}`),
        },
      ],
    };

    this.pdfMake.createPdf(docDefinition).open();
  }
}
