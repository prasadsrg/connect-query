import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProcedursComponent } from './store-procedurs.component';

describe('StoreProcedursComponent', () => {
  let component: StoreProcedursComponent;
  let fixture: ComponentFixture<StoreProcedursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProcedursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProcedursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
