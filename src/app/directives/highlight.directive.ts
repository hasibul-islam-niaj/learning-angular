import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[elemHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor='';
   }

   @HostListener('mouseenter') onMouseEnter(){
      this.highlight('yellow');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
   }

   private highlight(bgColor: String) {
     this.el.nativeElement.style.backgroundColor = bgColor;
   }
}
