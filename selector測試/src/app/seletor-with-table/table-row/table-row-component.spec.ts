import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowComponent } from './table-row-component';

describe('TableRowComponentComponent', () => {
  let component: TableRowComponent;
  let fixture: ComponentFixture<TableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
