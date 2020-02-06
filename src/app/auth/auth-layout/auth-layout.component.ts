import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {
  currentRoute: any;
  constructor(
    private _route :ActivatedRoute,
    private _router: Router
  ) {
    this._router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log(event.url);
      }
    })

  }

  ngOnInit() {
  }

}
