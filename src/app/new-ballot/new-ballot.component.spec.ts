import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBallotComponent } from './new-ballot.component';

describe('NewComponent', () => {
  let component: NewBallotComponent;
  let fixture: ComponentFixture<NewBallotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBallotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
