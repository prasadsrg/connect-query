import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryGridComponent } from './query-grid.component';

describe('QueryGridComponent', () => {
  let component: QueryGridComponent;
  let fixture: ComponentFixture<QueryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
