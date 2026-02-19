import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersManager } from './admin-users-manager';

describe('AdminUsersManager', () => {
  let component: AdminUsersManager;
  let fixture: ComponentFixture<AdminUsersManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsersManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
