import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueFacoComponent } from './que-faco.component';

describe('QueFacoComponent', () => {
  let component: QueFacoComponent;
  let fixture: ComponentFixture<QueFacoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueFacoComponent]
    });
    fixture = TestBed.createComponent(QueFacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
