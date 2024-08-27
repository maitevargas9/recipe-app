import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RecipeComponent } from './../recipe/recipe.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [MatTabsModule, RecipeComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {}
