import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserResponse } from 'src/app/interface/User.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  filteredData: IUserResponse;
  isLoading:boolean;
  isError:boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.isLoading=true;
    this.isError=false;
    this.userService.filterUser(this.form.get('login').value)
      .then(response => {
        this.filteredData = response;
      }).catch(error => {
        this.isError=true;
      }).finally(() => {
        this.isLoading=false;
      })
  }
}
