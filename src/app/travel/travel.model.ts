import { Country } from "../country/country.model";
import { Expense } from "../expense/expense.model";

export class Travel {
  travelName: string;
  travelPrice: string;
  travelStartDate: Date;
  travelEndDate: Date;
  country: Country;
  expenses: Expense[];

  constructor(travelName: string, travelPrice: string, travelStartDate: Date, travelEndDate: Date, country: Country, expenses: Expense[]) {
    this.travelName = travelName;
    this.travelPrice = travelPrice;
    this.travelStartDate = travelStartDate;
    this.travelEndDate = travelEndDate;
    this.country = country;
    this.expenses = expenses || [];
  }
}