import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoisComponent } from './dois.component';

describe('DoisComponent', () => {
  let component: DoisComponent;
  let fixture: ComponentFixture<DoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
