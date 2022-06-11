import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user/user.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let userServiceMock: any;
  
  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', [
      'onSubmit',
  ]);
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers:[
        {
          provide: UserService,
          useValue: userServiceMock,
      },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
