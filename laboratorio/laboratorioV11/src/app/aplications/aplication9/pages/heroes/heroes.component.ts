import { Component, OnInit } from '@angular/core';
import { faPlus, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesCrudComponent implements OnInit {
  public faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
