import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PacientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PacientesProvider {
  basepath = "http://localhost:8080";
  constructor(
    public http: Http
  )
  {
  }

  getListPatients(){
    return this.http.get(this.basepath+"/patients");
  }

  getListExercises(){
    return this.http.get(this.basepath+"/exercises");
  }
}
