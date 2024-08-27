import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Recipe App';
}
