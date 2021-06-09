import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../service/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public frm: FormGroup;

  constructor(private formBuilder: FormBuilder, private validadores: ValidadoresService) {
    this.frm = this.crearFormulario();
    this.crearFormulario();
    this.cargarData();

  }

  ngOnInit(): void {
  }

  private crearFormulario(): FormGroup {
    let frm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, this.validadores.noHerrera]],
      correo: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      direccion: this.formBuilder.group({
        calle: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    }, {
      validators: this.validadores.passwordIguales('password1', 'password2')
    }
    );

    return frm;
  }

  cargarData(): void {
    this.frm.setValue({
      nombre: 'Fermín',
      apellido: 'Martín',
      correo: 'fmgarcia@hotmail.es',
      password1: '',
      password2: '',
      direccion: {
        calle: 'Meridiano',
        ciudad: 'Sevilla'
      },
      pasatiempos: []
    });

    ['Juegar ordenador', 'Nadar']
      .forEach(valor => this.pasatiempos.push(
        this.formBuilder.control(valor))
      );
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
      console.log(this.frm.controls.nombre.errors);
      this.frm.markAllAsTouched();
      //return;
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

  public borrarPasatiempo(index: number) {
    this.pasatiempos.removeAt(index);
  }

  get isPassoworsDiferentes() {
    const pass1 = this.frm.get('password1')?.value;
    const pass2 = this.frm.get('password2')?.value;

    return (pass1 !== pass2);
  }



}
