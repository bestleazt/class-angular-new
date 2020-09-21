import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshomeComponent } from './viewshome.component';

describe('ViewshomeComponent', () => {
  let component: ViewshomeComponent;
  let fixture: ComponentFixture<ViewshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
