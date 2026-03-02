import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThemeModal } from './theme';

describe('DeleteThemeModal', () => {
  let component: DeleteThemeModal;
  let fixture: ComponentFixture<DeleteThemeModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteThemeModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteThemeModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
