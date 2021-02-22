import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData$: Observable<any>;

  constructor(private _sharedService: SharedService,  private router: Router) { }

  ngOnInit() {
    // get initial state of userData and populate only if the array is empty
    if(this._sharedService.getStateSnapshot().length === 0){
      this.populateData();
    }
    this.userData$ = this._sharedService.userData$;
  }

  onDelete(index){
    if(confirm("Are you sure to delete ?"))
    {
        const currentListOfUsers = this._sharedService.getStateSnapshot();
        currentListOfUsers.splice(index, 1);
        this._sharedService.updateUserData(currentListOfUsers);
        alert("User deleted successfully !")
      }
  }

  onEdit(index, id){
    this.router.navigate(['/users/add-user', id]);
        
  } 

  populateData(){
    const ALL_USERS = [
      {
        id: 1,
        name: 'Ad',
        email: 'ad@gmail.com',
        contact: '8447478305'
      },
      {
        id: 2,
        name: 'Add',
        email: 'ad@gmail.com',
        contact: '8447478305'
      },
      {
        id: 3,
        name: 'Addds',
        email: 'ad@gmail.com',
        contact: '8447478305'
      }
    ]
    this._sharedService.updateUserData(ALL_USERS);
  }
}