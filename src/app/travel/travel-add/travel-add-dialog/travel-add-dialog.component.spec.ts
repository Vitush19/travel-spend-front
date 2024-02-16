import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAddDialogComponent } from './travel-add-dialog.component';

describe('TravelAddDialogComponent', () => {
  let component: TravelAddDialogComponent;
  let fixture: ComponentFixture<TravelAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
