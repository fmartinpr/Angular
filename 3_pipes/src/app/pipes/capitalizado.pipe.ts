import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value:string, todas:boolean=false):string {
    if(todas){
      return value.toUpperCase();
    }else{
      value = value.toLowerCase();
      let nombres:string[] = value.split(" ");
      for(let i in nombres){
        nombres[i] = nombres[i].charAt(0).toUpperCase()+nombres[i].substring(1);
      }
      return nombres.join(" ");
    }
  }
}
