import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHabilidades]'
})
export class HabilidadesDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
