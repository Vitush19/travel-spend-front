import { Component } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { TravelAddDialogComponent } from './travel-add-dialog/travel-add-dialog.component';

@Component({
  selector: 'app-travel-add',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './travel-add.component.html',
  styleUrl: './travel-add.component.css'
})
export class TravelAddComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TravelAddDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
