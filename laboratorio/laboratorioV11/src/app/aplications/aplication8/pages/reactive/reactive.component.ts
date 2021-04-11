import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  
  public frm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
  
    this.crearFormulario();
  
  }

  ngOnInit(): void {
  }

  private crearFormulario(): void {
    this.frm = this.formBuilder.group({
      nombre: ['Fermín',[Validators.required, Validators.minLength(5)]],
      apellido: ['Martín',Validators.required],
      correo: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
  }

  public guardar(): void{
    console.log(this.frm);
  }

}
