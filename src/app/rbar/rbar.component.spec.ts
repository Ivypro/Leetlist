import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbarComponent } from './rbar.component';

describe('RbarComponent', () => {
  let component: RbarComponent;
  let fixture: ComponentFixture<RbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
