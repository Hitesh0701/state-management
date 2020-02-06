import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js'

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  [x: string]: any;

  addUserForm: FormGroup;
  route: any;
  idOfItemToEdit: any;
  fetchUser: any;
  userToEdit: any;
  isSubmitted: boolean;
  index:any;
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
    // this.router.navigate(['/users/user-list'])
  } else {
    if(this.idOfItemToEdit){
      this.patchUserById(this.idOfItemToEdit);
    }
  }
  
}

patchUserById(id){
  // get current state
  const ALL_USERS = this._sharedService.getStateSnapshot();
  const ITEM_TO_EDIT = ALL_USERS.find(item => item.id === +id);
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
    if(this.idOfItemToEdit){
      // get all current values
      const currentListOfUsers = this._sharedService.getStateSnapshot();
      const indexToEdit = currentListOfUsers.findIndex(item => item.id === +this.idOfItemToEdit);
      currentListOfUsers[indexToEdit] = this.addUserForm.value;
      this._sharedService.updateUserData(currentListOfUsers);
      this.addUserForm.reset();
      this.router.navigate(['/users/user-list']);
    }
    else{
      if(this.addUserForm.valid){
        // get all current values
        const currentListOfUsers = this._sharedService.getStateSnapshot();
        // get random id for new user
        this.addUserForm.controls.id.setValue(Math.floor(Math.random()*10) + 1);
        currentListOfUsers.push(this.addUserForm.value);
        this._sharedService.updateUserData(currentListOfUsers);
        this.addUserForm.reset();
        this.router.navigate(['/users/user-list']);
      } 
      else {
        this.isSubmitted = true;
        alert('Please fill all details');
      }
    }
  }
}
