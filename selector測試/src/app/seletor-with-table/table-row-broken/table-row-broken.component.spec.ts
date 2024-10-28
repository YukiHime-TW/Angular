import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowBrokenComponent } from './table-row-broken.component';

describe('TableRowBrokenComponent', () => {
  let component: TableRowBrokenComponent;
  let fixture: ComponentFixture<TableRowBrokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowBrokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowBrokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
