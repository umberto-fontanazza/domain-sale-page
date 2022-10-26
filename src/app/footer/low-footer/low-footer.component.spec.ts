import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowFooterComponent } from './low-footer.component';

describe('LowFooterComponent', () => {
  let component: LowFooterComponent;
  let fixture: ComponentFixture<LowFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
