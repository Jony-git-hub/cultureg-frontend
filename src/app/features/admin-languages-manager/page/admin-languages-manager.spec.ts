import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLanguagesManager } from './admin-languages-manager';

describe('AdminLanguagesManager', () => {
  let component: AdminLanguagesManager;
  let fixture: ComponentFixture<AdminLanguagesManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLanguagesManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLanguagesManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
