import { Component, OnInit } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['../../../aplication4.component.css']
})
export class LoadingComponent implements OnInit {
  public faSyncAlt = faSyncAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
