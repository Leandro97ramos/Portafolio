import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.slider').bxSlider({
      mode:'fade',
      captions: true,
      slideWidth: 600
    });
  }

}
