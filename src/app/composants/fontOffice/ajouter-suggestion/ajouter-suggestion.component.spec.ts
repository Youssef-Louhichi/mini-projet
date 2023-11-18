import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSuggestionComponent } from './ajouter-suggestion.component';

describe('AjouterSuggestionComponent', () => {
  let component: AjouterSuggestionComponent;
  let fixture: ComponentFixture<AjouterSuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterSuggestionComponent]
    });
    fixture = TestBed.createComponent(AjouterSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
