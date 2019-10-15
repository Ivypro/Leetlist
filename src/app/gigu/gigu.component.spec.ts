import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiguComponent } from './gigu.component';

describe('GiguComponent', () => {
  let component: GiguComponent;
  let fixture: ComponentFixture<GiguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
