import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVolumeDialogComponent } from './add-volume-dialog.component';

describe('AddVolumeDialogComponent', () => {
  let component: AddVolumeDialogComponent;
  let fixture: ComponentFixture<AddVolumeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVolumeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVolumeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
