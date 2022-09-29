import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersApprovalComponent } from './orders-approval.component';

describe('OrdersApprovalComponent', () => {
  let component: OrdersApprovalComponent;
  let fixture: ComponentFixture<OrdersApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
