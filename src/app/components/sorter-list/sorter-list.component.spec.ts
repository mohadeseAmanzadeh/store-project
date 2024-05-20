import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorterListComponent } from './sorter-list.component';

describe('SorterListComponent', () => {
  let component: SorterListComponent;
  let fixture: ComponentFixture<SorterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorterListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SorterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
