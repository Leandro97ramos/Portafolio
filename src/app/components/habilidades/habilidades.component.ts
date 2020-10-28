import { Component, OnInit, Input, DoCheck  } from '@angular/core';

import {Framework} from '../../models/project';
import {Lenguaje} from '../../models/project';
import {Metodologia} from '../../models/project';

import { HabilidadesService} from '../../services/habilidades.service';
import {GlobalBackend} from '../../services/global';
import { Observable} from 'rxjs';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {map} from 'rxjs/operators';

import {Edits} from '../../booleanoEditar/editar';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
  providers:[HabilidadesService]
})
export class HabilidadesComponent implements OnInit, DoCheck {

  public frameworks: Framework[];
  public lenguajes : Lenguaje[];
  public save_lenguajes;

  public metodologias: Metodologia[];
  public  selectedCategory: string;
  public editarL:boolean;
  public url: string;
  public contador:number;
  public obtId: any;
  public idInput: boolean;

  constructor(
    private _habilidadesService: HabilidadesService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) {
      this.url= GlobalBackend.url;
      this.contador= 0;
      this.editarL = Edits.eLeng;
      this.idInput=false;
  }

  ngOnInit(): void {
    this.getLeng(),
    this.getFrame(),
    this.getMetod()

  }
  ngDoCheck(){

      this.editarL = Edits.eLeng;

  }
  reloj(){

    this.editarL = Edits.eLeng;

    console.log(Edits.eLeng);


              if (this.editarL==false) {
                   Edits.eLeng = true;
              }else{
                   Edits.eLeng = false;
              }




  }
  // Lenguaje carga todos los lenguajes
  getLeng(){

    this._habilidadesService.getLenguajes().subscribe(
      response => {
        if(response.lenguajes){
          this.lenguajes = response.lenguajes;
        }
      },
      error =>{
          console.log(<any>error)
      }

    );
 }



//obtener el lenguaje
getLenguaje(id){

  this._habilidadesService.getLenguaje(id).subscribe(
      response => {
          this.lenguajes = response.lenguajes;
      },
      error =>{
          console.log(<any>error);
      }

  )



  console.log(id);
  // this.updateLenguaje(pasarLenguaje);

}

updateLenguaje(lenguaje: Lenguaje){




    console.log(lenguaje._id);
    console.log(lenguaje.lenguaje);

    this._habilidadesService.updateLenguaje(lenguaje).subscribe(
      response => {
        if (response.lenguaje) {
            this.save_lenguajes = response.lenguaje;
        }
      },
      error =>{
          console.log(<any>error);
      }
    )
    this.reloj();

}

deleteLenguaje(id, nombre){


    this._habilidadesService.deleteLenguaje(id).subscribe(
      response => {

            console.log(id);
            this.getLeng();


      }
    )

}

    // framework
getFrame(){
  this._habilidadesService.getFrameworks().subscribe(
    response => {
      if(response.frameworks){
        this.frameworks = response.frameworks;
      }
    },
    error =>{
      console.log(<any>error)
    }

  );

}

    // Metodologia
    getMetod(){

    this._habilidadesService.getMetodologias().subscribe(
      response => {
        if(response.metodologias){
          this.metodologias = response.metodologias;
        }
      },
      error =>{
          console.log(<any>error)
      }

    );
  }




}
