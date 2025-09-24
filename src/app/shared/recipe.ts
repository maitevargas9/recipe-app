import { Ingredient } from './ingredient';
import { DietType } from './diet-type';

export interface Recipe {
  nameRecipe: string;
  dish: string;
  dietType: DietType;
  portion: number;
  ingredients: Ingredient[];
  description: string;
}
