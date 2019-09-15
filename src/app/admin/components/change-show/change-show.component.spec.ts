import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MatDialog } from '@angular/material';
import { ChangeShowComponent } from './change-show.component';

@Injectable()
class MockAdminService {
   saveNowPlaying(nowPlaying, tid) {} 
 }

describe('ChangeShowComponent', () => {
  let component: ChangeShowComponent;
  let fixture: ComponentFixture<ChangeShowComponent>;
  beforeEach(() => {
    const adminServiceStub = {
      searchMovie: value => ({ subscribe: () => ({}) }),
      saveNowPlaying: (movie1, parameter1) => ({})
    };
    const matDialogStub = { open: successDialog => ({}), closeAll: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ChangeShowComponent],
      providers: [
        { provide: AdminService, useValue: adminServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(ChangeShowComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('could run  ngOnInit()', async () => {
    const result = component.ngOnInit();
    const app = fixture.debugElement.componentInstance;
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'something';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.movieResult).toBe(undefined);
    });
  });

  it('could run dialogOk()', async () => {
    const result = component.dialogOk();

    expect(component.nowShowing.length).toEqual(0);
    expect(component.movieResult.length).toEqual(0);

  });

  it('could  addMovie()', async () => {
    const movie = 'movieTitle01';
  const result = component.addMovie(movie);
  expect(component.nowShowing.length).toEqual(1);
  expect(component.nowPlaying.length).toEqual(1);

});

it('should run cancel()', async () => {
  const result = component.cancel();
  expect(component.nowShowing.length).toEqual(0);

});

  describe('save', () => {
    it('makes expected calls', () => {
      const adminServiceStub: AdminService = fixture.debugElement.injector.get(
        AdminService
      );
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(adminServiceStub, 'saveNowPlaying').and.callThrough();
      spyOn(matDialogStub, 'open').and.callThrough();
      component.save();
      expect(adminServiceStub.saveNowPlaying).toHaveBeenCalled();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
