import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterIndexHotelsComponent } from './router-index-hotels.component';

describe('RouterIndexHotelsComponent', () => {
  let component: RouterIndexHotelsComponent;
  let fixture: ComponentFixture<RouterIndexHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterIndexHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterIndexHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
