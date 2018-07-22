import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log(`Directiva llamada`)
    el.nativeElement.style.backgroundColor = "red"
  }

  @Input("appResaltado") nuevoColor: string

  @HostListener('mouseenter') mouseEnter() {
    console.log(this.nuevoColor)
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.backgroundColor = "blue"
  }

}
