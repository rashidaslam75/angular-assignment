import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user/user.service';
import { DOMHelper } from 'src/testing/dom.helper';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let userServiceMock: any;
  let helper: DOMHelper<SearchComponent>;
  let submitEl: any;
  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', [
      'filterUser',
    ]);

    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        {
          provide: UserService,
          useValue: userServiceMock,
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    helper = new DOMHelper(fixture);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Validation SUITS', () => {
    it('should form initialized', () => {
      expect(component.form).toBeTruthy();
    });

    it('should login form has login fields ', () => {
      expect(component.form.get('login')).toBeTruthy();
    });

    it('should login field be required ', () => {
      expect(
        component.form
          .get('login')
          .validator({} as AbstractControl)
      ).toBeTruthy();
    });

    it('should button be disable if form is invalid ', () => {
      component.form.get('login').setValue('')
      fixture.detectChanges();
      expect(submitEl.nativeElement.querySelector('button').disabled).toBeTruthy();
    });

    it('should button be enabled if form is valid ', () => {
      component.form.get('login').setValue('hello')
      fixture.detectChanges();
      expect(submitEl.nativeElement.querySelector('button').disabled).toBeFalsy();
    });
  });

  describe('Form Submit SUITS', () => {
    it('should call the onSubmit button only 1 time', () => {
      component.form.get('login').setValue('hello')
      fixture.detectChanges();
      spyOn(component, 'onSubmit');
      fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
      expect(component.onSubmit).toHaveBeenCalledTimes(1)
    });

    it('should call the filterUser method one time ', () => {
      component.form.get('login').setValue('hello')
      fixture.detectChanges();
      fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
      expect(userServiceMock.filterUser).toHaveBeenCalledTimes(1);
    });
   
    it('should show error message incase of exception', () => {
      component.isError=true;
      fixture.detectChanges();
      expect(submitEl.nativeElement.querySelector('.exception> .message ').textContent).toContain('We are unable to process the request, Please try again later.')
    });

    it('should show the no data message if result is empty', () => {
      component.filteredData={
        items:[],
        total_count:0
      }
      fixture.detectChanges();
      expect(submitEl.nativeElement.querySelector('.no-data > .message ').textContent).toContain('Try to modify the filter to see the records here!')
    });
  });
});

