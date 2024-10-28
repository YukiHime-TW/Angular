import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSelector1Component } from './type-selector1.component';

describe('TypeSelector1Component', () => {
  let component: TypeSelector1Component;
  let fixture: ComponentFixture<TypeSelector1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeSelector1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeSelector1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
