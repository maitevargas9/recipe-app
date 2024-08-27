import { Ingredient } from './ingredient';

export interface Recipe {
  nameRecipe: string;
  dish: string;
  portion: number;
  ingredients: Ingredient[];
  description: string;
}
