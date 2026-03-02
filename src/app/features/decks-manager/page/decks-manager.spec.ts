import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DecksManagerPage} from './decks-manager';

describe('DecksManagerPage', () => {
  let component: DecksManagerPage;
  let fixture: ComponentFixture<DecksManagerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecksManagerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecksManagerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
