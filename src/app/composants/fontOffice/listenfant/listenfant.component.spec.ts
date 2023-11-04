import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenfantComponent } from './listenfant.component';

describe('ListenfantComponent', () => {
  let component: ListenfantComponent;
  let fixture: ComponentFixture<ListenfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListenfantComponent]
    });
    fixture = TestBed.createComponent(ListenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
