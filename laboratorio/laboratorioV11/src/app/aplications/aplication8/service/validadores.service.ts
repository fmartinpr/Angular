import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

interface ErrorValidate {
  [s: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {
  constructor() { }
  noHerrera(control: FormControl): ErrorValidate | null {

    if (control.value?.toLowerCase() === 'herrera') {
      return {
        noHerrera: true
      }
    }

    return null;

  }

  public passwordIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }

public existeUsuario(control: FormControl): Promise<ErrorValidate | null> | Observable<ErrorValidate | null> | null {
  console.log(control);
  if (!control.value) {
    return Promise.resolve(null);
  }
  console.log(control.value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'Pepe') {
        resolve({ existe: true });
      } else {
        resolve(null);
      }
    }, 3500);
  });
}
}
