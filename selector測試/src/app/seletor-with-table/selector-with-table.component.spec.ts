import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorWithTableComponent } from './selector-with-table.component';

describe('SeletorWithTableComponent', () => {
  let component: SelectorWithTableComponent;
  let fixture: ComponentFixture<SelectorWithTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorWithTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorWithTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
