import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShirtsComponent } from './shirts.component';

describe('ShirtsComponent', () => {
  let component: ShirtsComponent;
  let fixture: ComponentFixture<ShirtsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
