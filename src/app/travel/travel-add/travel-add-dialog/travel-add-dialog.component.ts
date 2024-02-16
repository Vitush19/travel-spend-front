import { CountryService } from './../../../country/country.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { Travel } from '../../travel.model';
import { Country } from '../../../country/country.model';

@Component({
  selector: 'app-travel-add-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  templateUrl: './travel-add-dialog.component.html',
  styleUrl: './travel-add-dialog.component.css'
})
export class TravelAddDialogComponent implements OnInit {

  countries: Country[] = [];
  constructor(
    public dialogRef: MatDialogRef<TravelAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public travel: Travel,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.countries = this.countryService.getData();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onChangeStartDate(event: any): void {
    console.log(event.value);
  }

  onChangeEndDate(event: any): void {
    console.log(event.value);
  }
}
