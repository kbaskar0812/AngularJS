
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BvoipNewTableComponent } from './bvoip-new-table.component';

describe('BvoipNewTableComponent', () => {
  let component: BvoipNewTableComponent;
  let fixture: ComponentFixture<BvoipNewTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BvoipNewTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BvoipNewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
