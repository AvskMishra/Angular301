import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SocialFeedsComponent } from './social-feeds.component';
describe('SocialFeedsComponent', () => {
  let component: SocialFeedsComponent;
  let fixture: ComponentFixture<SocialFeedsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SocialFeedsComponent]
    });
    fixture = TestBed.createComponent(SocialFeedsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
