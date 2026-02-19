import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksManager } from './decks-manager';

describe('DecksManager', () => {
  let component: DecksManager;
  let fixture: ComponentFixture<DecksManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecksManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecksManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
