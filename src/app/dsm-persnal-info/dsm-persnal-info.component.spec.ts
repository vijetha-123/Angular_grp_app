import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmPersnalInfoComponent } from './dsm-persnal-info.component';

describe('DsmPersnalInfoComponent', () => {
  let component: DsmPersnalInfoComponent;
  let fixture: ComponentFixture<DsmPersnalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsmPersnalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmPersnalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
