import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDecksManager } from './admin-decks-manager';

describe('AdminDecksManager', () => {
  let component: AdminDecksManager;
  let fixture: ComponentFixture<AdminDecksManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDecksManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDecksManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
