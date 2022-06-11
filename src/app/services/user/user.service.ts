import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private network: NetworkService) { }

  filterUser(text: string) {
    return this.network.get(`search/users?q=${text}`)
  }
}
