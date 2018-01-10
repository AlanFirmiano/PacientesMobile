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
  deletePatient(id:number){
    return this.http.delete(this.basepath+"/patients/"+id);
  }
  getListExercises(){
    return this.http.get(this.basepath+"/exercises");
  }
  deleteExercise(id:number){
    return this.http.delete(this.basepath+"/exercises/"+id);
  }
}
