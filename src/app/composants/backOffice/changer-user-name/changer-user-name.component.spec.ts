import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerUserNameComponent } from './changer-user-name.component';

describe('ChangerUserNameComponent', () => {
  let component: ChangerUserNameComponent;
  let fixture: ComponentFixture<ChangerUserNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangerUserNameComponent]
    });
    fixture = TestBed.createComponent(ChangerUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
