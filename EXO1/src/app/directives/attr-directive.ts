import { Directive , ElementRef } from "@angular/core";


@Directive({
  selector : '[highlightDirective]'
})


export class HighlightDirective {


  constructor(elRef : ElementRef){
    elRef.nativeElement.style.backgroundColor = 'red'
    elRef.nativeElement.style.color = 'white'
  }
}


@Directive({
  selector : '[boldDirective]'
})


export class BoldDirective {


  constructor(elRef : ElementRef){
    elRef.nativeElement.style.fontWeight = 'bolder'
  }
}
