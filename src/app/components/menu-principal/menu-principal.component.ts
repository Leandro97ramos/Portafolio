import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  //pasaje de el fronted al backend
  public interruptor: boolean;
  constructor() {
      this.interruptor = true;
  }

  ngOnInit(): void {

  }
  setInterruptor(interruptor){
    console.log(interruptor);
    this.interruptor = interruptor;
  }

}
