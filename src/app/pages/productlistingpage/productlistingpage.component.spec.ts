import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistingpageComponent } from './productlistingpage.component';

describe('ProductlistingpageComponent', () => {
  let component: ProductlistingpageComponent;
  let fixture: ComponentFixture<ProductlistingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductlistingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductlistingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
