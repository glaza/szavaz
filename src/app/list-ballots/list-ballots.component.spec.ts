import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBallotsComponent } from './list-ballots.component';

describe('BallotsComponent', () => {
  let component: ListBallotsComponent;
  let fixture: ComponentFixture<ListBallotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBallotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBallotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
