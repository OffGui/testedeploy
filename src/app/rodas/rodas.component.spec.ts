import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodasComponent } from './rodas.component';

describe('RodasComponent', () => {
  let component: RodasComponent;
  let fixture: ComponentFixture<RodasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RodasComponent]
    });
    fixture = TestBed.createComponent(RodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
