import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  addUserForm: FormGroup;
  route: any;
  idOfItemToEdit: any;
  fetchUser: any;
  userToEdit: any;
  constructor(private _sharedService: SharedService,
     private router: Router,
     private activeRoute: ActivatedRoute) {
    this.idOfItemToEdit = this.activeRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });

    // get initial state of userData and populate only if the array is empty
    if(this._sharedService.getStateSnapshot().length === 0){
    // this.populateData();
    // if(this.idOfItemToEdit){
    //   this.patchUserById(this.idOfItemToEdit);
    // }
    this.router.navigate(['/users'])
  } else {
    if(this.idOfItemToEdit){
      this.patchUserById(this.idOfItemToEdit);
    }
  }

}

  patchUserById(id){
    console.log(id);
    // get current state
    const ALL_USERS = this._sharedService.getStateSnapshot();
    console.log(ALL_USERS);
    const ITEM_TO_EDIT = ALL_USERS.find(item => item.id === +id);
    console.log(ITEM_TO_EDIT)
    this.addUserForm.patchValue(ITEM_TO_EDIT);
  }

  populateData(){
    const ALL_USERS = [
      {
        id: 1,
        name: 'Aditya',
        email: 'ad@gmail.com',
        contact: '8447478305'
      }
    ]
    this._sharedService.updateUserData(ALL_USERS);
  }

  onSubmit(){
      if(this.addUserForm.valid){
        const currentListOfUsers = this._sharedService.getStateSnapshot();

        this.addUserForm.controls.id.setValue(Math.floor(Math.random()*10) + 1);
        currentListOfUsers.push(this.addUserForm.value);
        this._sharedService.updateUserData(currentListOfUsers);
        this.addUserForm.reset();
        // alert("New user added successfully !")
        this.router.navigate(['/users']);
      } 
      else {
        alert('Please fill all details');
      }
    }
}
