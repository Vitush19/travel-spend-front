import { Category } from '../category/category.model';
import { Country } from '../country/country.model';
import { Travel } from './../travel/travel.model';

export class Expense {
  expenseLabel: string;
  expenseDate: Date;
  paymentMethod: string;
  category: Category;
  country: Country;
  travel: Travel;

  constructor(expenseLabel: string, expenseDate: Date, paymentMethod: string, category: Category, country: Country, travel: Travel) {
      this.expenseLabel = expenseLabel;
      this.expenseDate = expenseDate;
      this.paymentMethod = paymentMethod;
      this.category = category;
      this.country = country;
      this.travel = travel;
  }
}