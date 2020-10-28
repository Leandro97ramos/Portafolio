import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  public title: string;
  public subtitle: string;

  constructor() {
  this.title="Leandro Ramos";
  this.subtitle="Desarrollador web"

}

  ngOnInit(): void {
  }

}
