import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styles: []
})

export class AlertErrorComponent implements OnInit {

  @Input() msgError: string;
  @Input() error: boolean;
  constructor() { }

  ngOnInit() {
  }

}
