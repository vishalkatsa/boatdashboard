import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcategoryComponent } from './totalcategory.component';

describe('TotalcategoryComponent', () => {
  let component: TotalcategoryComponent;
  let fixture: ComponentFixture<TotalcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
