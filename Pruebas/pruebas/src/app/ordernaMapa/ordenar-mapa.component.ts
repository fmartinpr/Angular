import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ordenar-mapa',
  templateUrl: './ordenar-mapa.component.html',
  styleUrls: ['./ordenar-mapa.component.css']
})
export class OrdenarMapaComponent implements OnInit {

  public mapa = new Map<string, number[]>();

  constructor() {
    const arrayMay: number[] = [1, 2, 3, 4, 5, 6, 7];
    const arrayMed: number[] = [1, 2, 3, 4, 5];
    const arrayPeq: number[] = [1, 2, 3];

    /** PEQ-MAY-MED */
    //this.mapa.set('peq', arrayPeq);
    //this.mapa.set('may', arrayMay);
    //this.mapa.set('med', arrayMed);

     /** PEQ-MAY-MED */
     this.mapa.set('may', arrayMay);
     this.mapa.set('peq', arrayPeq);
     this.mapa.set('med', arrayMed);

  }

  ngOnInit() {

    console.log(this.mapa);
    let mapAsc = new Map([...this.mapa.entries()].sort((a, b) => {
      if (a[1].length > b[1].length) {
        return -1;
      }
      if (a[1].length < b[1].length) {
        return 1;
      }
      return 0;
    }));
    console.log(mapAsc);
  }

}
