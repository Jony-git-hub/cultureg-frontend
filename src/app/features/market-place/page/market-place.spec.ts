import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPlacePage } from './market-place';

describe('MarketPlacePage', () => {
  let component: MarketPlacePage;
  let fixture: ComponentFixture<MarketPlacePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketPlacePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPlacePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
