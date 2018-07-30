import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BvoipSorTableComponent } from './bvoip-sor-table.component';

describe('BvoipSorTableComponent', () => {
  let component: BvoipSorTableComponent;
  let fixture: ComponentFixture<BvoipSorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BvoipSorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BvoipSorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
