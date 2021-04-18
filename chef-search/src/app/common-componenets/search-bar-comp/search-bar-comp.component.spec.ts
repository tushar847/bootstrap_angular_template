import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCompComponent } from './search-bar-comp.component';

describe('SearchBarCompComponent', () => {
  let component: SearchBarCompComponent;
  let fixture: ComponentFixture<SearchBarCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
