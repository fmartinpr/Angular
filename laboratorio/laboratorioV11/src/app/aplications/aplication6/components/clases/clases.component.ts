import { Component, OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { faSave, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy {
  public alerta: string;
  public danger: boolean;
  public icono;
  public loading: boolean;
  public txtBotonGuardar: string;

  constructor() {
    this.alerta = 'alert-danger';
    this.danger = true;
    this.loading = false;
    this.icono = faSave;
    this.txtBotonGuardar = 'Guardar cambios';
    console.log('constructor()');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewInit()');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges()');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
  }

  public ejecutar(): void {
    this.loading = true;
    this.icono = faSpinner;
    this.txtBotonGuardar = 'Guardando ...';
    setTimeout(() => {
      this.loading = false;
      this.icono = faSave;
      this.txtBotonGuardar = 'Guardar cambios';
    }, 3000);
  }

}
