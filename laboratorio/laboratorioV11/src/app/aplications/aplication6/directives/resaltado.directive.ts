import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') color: string;
  constructor(private el: ElementRef) {
    this.color = '#B0B0B0';
  }

  @HostListener('mouseenter') mouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') mouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
