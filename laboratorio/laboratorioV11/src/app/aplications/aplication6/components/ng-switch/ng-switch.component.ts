import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent implements OnInit {
  public alerta: string;

  constructor() { 
    this.alerta = 'info';
  }

  ngOnInit(): void {
  }

}
