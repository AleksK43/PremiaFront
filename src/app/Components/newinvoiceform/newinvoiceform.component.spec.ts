import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinvoiceformComponent } from './newinvoiceform.component';

describe('NewinvoiceformComponent', () => {
  let component: NewinvoiceformComponent;
  let fixture: ComponentFixture<NewinvoiceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewinvoiceformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewinvoiceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
