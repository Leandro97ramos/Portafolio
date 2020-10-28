import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

import { Lenguaje} from '../models/project';
import { Framework} from '../models/project';
import { Metodologia} from '../models/project';

import { GlobalBackend} from './global';

@Injectable()
export class HabilidadesService{
    public url: string;
    public selectedLenguaje: Lenguaje;

    constructor(
       private _http: HttpClient
    ){
        this.url = GlobalBackend.url;
        this.selectedLenguaje = new Lenguaje('', '');
    }



    // lenguaje

    saveLenguaje(lenguaje: Lenguaje): Observable<any>{
      let params = JSON.stringify(lenguaje);
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._http.post<any>(this.url+'save-lenguaje', params, {headers:headers});
    }

    getLenguajes(): Observable<any>{
      let headers = new  HttpHeaders().set('Content-Type', 'application/json');

      return this._http.get(this.url+'lenguajes', {headers: headers});
    }


    getLenguaje(id): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');

      return this._http.get(this.url+'lenguaje/'+id, {headers: headers});
    }

// Probando


    deleteLenguaje(id): Observable<any>{

  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this._http.delete(this.url+'lenguaje/'+id, {headers: headers});
  	}

    updateLenguaje(lenguaje): Observable<any>{
      let params = JSON.stringify(lenguaje);
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._http.put<any>(this.url+'lenguaje/'+ lenguaje._id, params, {headers: headers});
    }
    //framework

    saveFramework(framework: Framework): Observable<any>{
      let params = JSON.stringify(framework);
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._http.post<any>(this.url+'save-framework', params, {headers:headers});
    }

    getFrameworks(): Observable<any>{
      let headers = new  HttpHeaders().set('Content-Type', 'application/json');

      return this._http.get(this.url+'frameworks', {headers: headers});
    }


    getFramework(id): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');

      return this._http.get(this.url+'framework'+id, {headers: headers});
    }

    deleteFramework(id): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this._http.delete(this.url+'framework/'+id, {headers: headers});
    }

    updateFramework(framework): Observable<any>{
      let params = JSON.stringify(framework);
      let headers = new HttpHeaders().set('Content-Type','application/json');

      return this._http.put(this.url+'framework/'+framework._id, params , {headers: headers});
    }

    //metodologia

        saveMetodologia(metodologia: Metodologia): Observable<any>{
          let params = JSON.stringify(metodologia);
          let headers = new HttpHeaders().set('Content-Type', 'application/json');

          return this._http.post<any>(this.url+'save-metodologia', params, {headers:headers});
        }


        getMetodologias(): Observable<any>{
          let headers = new  HttpHeaders().set('Content-Type', 'application/json');

          return this._http.get(this.url+'metodologias', {headers: headers});
        }


        getMetodologia(id): Observable<any>{
          let headers = new HttpHeaders().set('Content-Type','application/json');

          return this._http.get(this.url+'metodologia'+ id, {headers: headers});
        }

        deleteMetodologia(id): Observable<any>{
          let headers = new HttpHeaders().set('Content-Type','application/json');

          return this._http.delete(this.url+'metodologia/'+id, {headers: headers});
        }

        updateMetodologia(metodologia): Observable<any>{
          let params = JSON.stringify(metodologia);
          let headers = new HttpHeaders().set('Content-Type','application/json');

          return this._http.put(this.url+'metodologia/'+metodologia._id, params , {headers: headers});
        }
}
