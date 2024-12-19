import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private balise:ElementRef, private render:Renderer2) { 
    //this.render.setStyle(this.balise.nativeElement, 'backgroundColor',
      // 'green');
  }

  @HostListener('mouseenter') onClick() {
    this.render.addClass(this.balise.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.removeClass(this.balise.nativeElement, 'highlight'
       );
  }

}
