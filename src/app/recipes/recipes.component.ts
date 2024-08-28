import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './../recipe/recipe.component';
import { Recipe } from '../shared/recipe';
import { StartersService } from '../dishes/starters.service';
import { MaindishesService } from '../dishes/maindishes.service';
import { DessertsService } from '../dishes/desserts.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [MatTabsModule, CommonModule, RecipeComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  starters: Recipe[] = [];
  mainDishes: Recipe[] = [];
  desserts: Recipe[] = [];

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

  x = this.getStarters();
}
