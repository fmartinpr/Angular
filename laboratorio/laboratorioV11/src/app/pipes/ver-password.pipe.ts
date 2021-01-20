import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verPassword'
})
export class VerPasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): unknown {
    /*if(activar){
      return value;
    }else{
      let caracteres = value.split('');
      caracteres = caracteres.map(
        c => c = '*'
      );
      return caracteres.join('');
    }*/
    return (!activar) ? '*'.repeat(value.length) : value;
  }

}
