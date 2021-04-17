import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = this.crearFormulario();
    this.crearFormulario();
    this.cargarData();

  }

  ngOnInit(): void {
  }

  private crearFormulario(): FormGroup {
    let frm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion: this.formBuilder.group({
        calle: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    });

    return frm;
  }

  cargarData(): void {
    this.frm.setValue({
      nombre: 'Fermín',
      apellido: 'Martín',
      correo: 'fmgarcia@hotmail.es',
      direccion: {
        calle: 'Meridiano',
        ciudad: 'Sevilla'
      },
      pasatiempos: []
    });

    ['Juegar ordenador','Nadar'].forEach(valor => this.pasatiempos.push(this.formBuilder.control(valor)));
  }

  public guardar(): void {
    if (this.frm.invalid) {
      /*Object.values(this.frm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => {
            control.markAllAsTouched();
          });
        } else {
          control.markAllAsTouched();
        }
      });*/
      this.frm.markAllAsTouched();
      return;
    }
    console.log(this.frm);
  }

  public onReset(): void {
    this.frm.reset({
      nombre: 'Sin nombre'
    });
  }

  public isCampoValido(nombreCampo: string): boolean {
    if (this.frm !== null && nombreCampo !== null) {
      const campo = this.frm.get(nombreCampo);
      return campo !== null && campo.invalid && campo.touched
    } else {
      return true;
    }
  }

  public get pasatiempos(): FormArray {
    return this.frm.get('pasatiempos') as FormArray;
  }

public agregarPasatiempo(): void {
  this.pasatiempos.push(this.formBuilder.control('', Validators.required));
}

public borrarPasatiempo(index: number){
  this.pasatiempos.removeAt(index);
}

}
