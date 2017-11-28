import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
      el.nativeElement.style.backgroundColor = 'gray';
      el.nativeElement.style.padding = '0 0 10px 10px';
  }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('lightgray');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('gray');
    }
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}
