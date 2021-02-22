import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida-auth0',
  templateUrl: './protegida-auth0.component.html',
  styles: [
  ]
})
export class ProtegidaAuth0Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUser$().subscribe(
      data => console.log(data)
    );
    this.auth.userProfile$.subscribe(
      data => console.log(data)
    );
  }

}
