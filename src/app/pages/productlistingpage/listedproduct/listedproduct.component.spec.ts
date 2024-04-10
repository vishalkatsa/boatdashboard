import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedproductComponent } from './listedproduct.component';

describe('ListedproductComponent', () => {
  let component: ListedproductComponent;
  let fixture: ComponentFixture<ListedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
