import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmploteesComponent } from './list-emplotees.component';

describe('ListEmploteesComponent', () => {
  let component: ListEmploteesComponent;
  let fixture: ComponentFixture<ListEmploteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmploteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmploteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
