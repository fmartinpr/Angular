import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string, url?: string): any {
    if (url !== undefined) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    } else {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    }
  }

}
