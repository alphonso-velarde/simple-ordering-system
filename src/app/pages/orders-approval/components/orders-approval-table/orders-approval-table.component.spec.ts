import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersApprovalTableComponent } from './orders-approval-tablecomponent';

describe('OrdersApprovalTableComponent', () => {
  let component: OrdersApprovalTableComponent;
  let fixture: ComponentFixture<OrdersApprovalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersApprovalTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersApprovalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
