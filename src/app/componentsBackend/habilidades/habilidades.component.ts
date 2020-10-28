import { Component, OnInit ,ComponentFactoryResolver, ViewChild, Input, ViewContainerRef, DoCheck } from '@angular/core';
import{ HabilidadesComponent} from '../../components/habilidades/habilidades.component';

import {Framework} from '../../models/project';
import {Lenguaje} from '../../models/project';
import {Metodologia} from '../../models/project';

import { HabilidadesDirective } from '../../components/habilidades/habilidades.directive';
import {HabilidadesService} from '../../services/habilidades.service';
import {GlobalBackend} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router'

import {Edits} from '../../booleanoEditar/editar';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidadesB.component.css'],
  providers: [ HabilidadesService]
})


export class HabilidadesBComponent implements OnInit , DoCheck   {

  @ViewChild(HabilidadesDirective)public dynamicComp: HabilidadesDirective;


  public frame: Framework;
  public lengs: Lenguaje;
  public metod: Metodologia;

  public url_cambios: string

  public save_framework;
  public save_lenguaje;
  public save_metodologia;
  public flag:boolean;
  public status: string;
  public url: string;
  public filesToUpload: Array<File>;
  miComponent: any;
  public editarL: boolean;
  public obtenerId: [any];

  constructor(
    private _habilidadesService: HabilidadesService,
    private componentFactoryResolver: ComponentFactoryResolver,
      ) {
    this.editarL= Edits;
    this.frame = new Framework('','');
    this.lengs = new Lenguaje('','');
    this.metod = new Metodologia('','');
    this.miComponent = HabilidadesComponent;
    this.url = GlobalBackend.url;
    this.flag= true;



   }





  ngOnInit(): void {



    }
  ngDoCheck(){



  }

    recargarPag(){
      const component = this.componentFactoryResolver.resolveComponentFactory(this.miComponent);

      this.dynamicComp.viewContainerRef.clear();
      this.dynamicComp.viewContainerRef.createComponent(component);
      console.log("la bandera es "+this.flag);

    }


    SubmitLenguaje(lenguajes){
      this.flag = false;
      this.recargarPag();

      this._habilidadesService.saveLenguaje(this.lengs).subscribe(
        response => {
          console.log(response);
          if (response.lengs){

            this.save_lenguaje =response.lengs;
            this.status ="sucess"
          }else{
            this.status ="failed"
          }
        },
        error => {
          console.log(<any>error);
        }

      );

    }



    EditarLenguajes(){

      this.editarL = Edits.eLeng;

      console.log(Edits.eLeng);


                if (this.editarL==false) {
                     Edits.eLeng = true;
                }else{
                     Edits.eLeng = false;
                }



    }

  SubmitFramework(framework){
    this.flag = false;

    this.recargarPag();

      this._habilidadesService.saveFramework(this.frame).subscribe(
        response => {
          console.log(response);
          if (response.frame){

              this.save_framework =response.frame;
              this.status ="sucess"
          }else{
            this.status ="failed"
          }
        },
          error => {
              console.log(<any>error);
          }

      );
  }
  EditarFramework(){

    this.editarL = Edits.eFrame;

    console.log(Edits.eLeng);


              if (this.editarL==false) {
                   Edits.eFrame = true;
              }else{
                   Edits.eFrame = false;
              }

  }
  SubmitMetodologia(metodologia){
    this.flag=false;
    const component = this.componentFactoryResolver.resolveComponentFactory(this.miComponent);
      this.dynamicComp.viewContainerRef.clear()
      this.dynamicComp.viewContainerRef.createComponent(component)

      this._habilidadesService.saveMetodologia(this.metod).subscribe(
        response => {
          console.log(response);
          if (response.metod){

              this.save_metodologia =response.metod;
              this.status ="sucess"
          }else{
            this.status ="failed"
          }
        },
          error => {
              console.log(<any>error);
          }

      );
  }


}
