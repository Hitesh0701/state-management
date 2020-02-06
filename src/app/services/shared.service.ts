import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _usersDataSource = new BehaviorSubject([]);
  public userData$ = this._usersDataSource.asObservable();

  constructor() { }

  getStateSnapshot(){
    return this._usersDataSource.getValue();
  }

  updateUserData(data){
    this._usersDataSource.next(data);
  }
}