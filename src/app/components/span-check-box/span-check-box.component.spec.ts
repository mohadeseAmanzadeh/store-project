import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanCheckBoxComponent } from './span-check-box.component';

describe('SpanCheckBoxComponent', () => {
  let component: SpanCheckBoxComponent;
  let fixture: ComponentFixture<SpanCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpanCheckBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpanCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
