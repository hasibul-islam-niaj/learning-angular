import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[green-hl]'
})
export class BggreenhighlightDirective {

  constructor(private elemRef: ElementRef) { }

  @HostListener('mouseenter') onMouseUp(){
    this.elemRef.nativeElement.style.backgroundColor = 'lightgreen';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.style.backgroundColor = '';
  }
}
