import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminThemesManagerPage } from './admin-themes-manager';

describe('AdminThemesManager', () => {
  let component: AdminThemesManagerPage;
  let fixture: ComponentFixture<AdminThemesManagerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminThemesManagerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminThemesManagerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
