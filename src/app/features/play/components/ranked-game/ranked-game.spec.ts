import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankedGame } from './ranked-game';

describe('RankedGame', () => {
  let component: RankedGame;
  let fixture: ComponentFixture<RankedGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankedGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankedGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
