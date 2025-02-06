import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { Recipe } from '../shared/recipe';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  @Input() dish: Recipe | null = null;
  portion = this.dish?.portion;
  ingredients = this.dish?.ingredients!;

  ingredientList: Ingredient[] = [];

  constructor() {}

  ngOnInit() {}

  onChange(port: number) {
    console.log(port);
  }

  addIngredients(item: Ingredient[]) {
    this.ingredientList = item;
  }
}
