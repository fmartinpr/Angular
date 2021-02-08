import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-auth0',
  templateUrl: './navbar-auth0.component.html',
  styles: [
  ]
})
export class NavbarAuth0Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
