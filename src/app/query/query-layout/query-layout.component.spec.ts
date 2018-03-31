import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryLayoutComponent } from './query-layout.component';

describe('QueryLayoutComponent', () => {
  let component: QueryLayoutComponent;
  let fixture: ComponentFixture<QueryLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
